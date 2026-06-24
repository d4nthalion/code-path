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
    docker run -d --name piston --privileged -p 2000:2000 ghcr.io/engineer-man/piston

    echo "[Piston] Esperando que arranque..."
    sleep 5

    echo "[Piston] Instalando runtimes (puede tardar varios minutos)..."
    docker exec piston piston install python
    docker exec piston piston install javascript
    docker exec piston piston install java
    docker exec piston piston install c++
    docker exec piston piston install csharp
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
