#!/usr/bin/env bash
set -e

echo "[CodePath] Iniciando..."

# --- Comprobar Docker ---
if ! docker info > /dev/null 2>&1; then
    echo "[ERROR] Docker no está corriendo. Arráncalo e inténtalo de nuevo."
    exit 1
fi
echo "[OK] Docker disponible."

# --- Piston: crear o arrancar ---
if ! docker inspect piston > /dev/null 2>&1; then
    echo "[Piston] Creando contenedor por primera vez..."
    docker volume create piston_data > /dev/null 2>&1 || true
    docker run -d --name piston --privileged -v piston_data:/piston -p 2000:2000 ghcr.io/engineer-man/piston

    echo "[Piston] Esperando que arranque..."
    sleep 5

    echo "[Piston] Esperando que la API arranque..."
    sleep 10

    echo "[Piston] Instalando runtimes via API, puede tardar varios minutos..."
    curl -s -X POST http://localhost:2000/api/v2/packages \
        -H "Content-Type: application/json" \
        -d '{"language":"python","version":"3.10.0"}' > /dev/null
    echo "[Piston]   python OK"
    curl -s -X POST http://localhost:2000/api/v2/packages \
        -H "Content-Type: application/json" \
        -d '{"language":"javascript","version":"18.15.0"}' > /dev/null
    echo "[Piston]   javascript OK"
    curl -s -X POST http://localhost:2000/api/v2/packages \
        -H "Content-Type: application/json" \
        -d '{"language":"java","version":"15.0.2"}' > /dev/null
    echo "[Piston]   java OK"
    curl -s -X POST http://localhost:2000/api/v2/packages \
        -H "Content-Type: application/json" \
        -d '{"language":"c++","version":"10.2.0"}' > /dev/null
    echo "[Piston]   c++ OK"
    curl -s -X POST http://localhost:2000/api/v2/packages \
        -H "Content-Type: application/json" \
        -d '{"language":"csharp","version":"6.12.0"}' > /dev/null
    echo "[Piston]   csharp OK"
    echo "[Piston] Runtimes instalados."
else
    docker start piston > /dev/null 2>&1 || true
    echo "[OK] Contenedor Piston arrancado."
fi

# --- Comprobar que Piston responde ---
echo "[Piston] Comprobando API..."
sleep 3
if ! curl -s http://localhost:2000/api/v2/runtimes > /dev/null 2>&1; then
    echo "[AVISO] Piston todavía no responde. Puede necesitar unos segundos más."
fi

# --- Web ---
echo "[Web] Arrancando servidor de desarrollo..."
if [ -f pnpm-lock.yaml ]; then
    pnpm dev
else
    npm run dev
fi
