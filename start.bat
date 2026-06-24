@echo off
setlocal

echo [CodePath] Iniciando...

REM --- Comprobar Docker ---
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker no esta corriendo. Abre Docker Desktop y vuelve a intentarlo.
    pause
    exit /b 1
)
echo [OK] Docker disponible.

REM --- Piston: crear o arrancar ---
docker inspect piston >nul 2>&1
if %errorlevel% neq 0 (
    echo [Piston] Creando contenedor por primera vez...
    docker run -d --name piston --privileged -p 2000:2000 ghcr.io/engineer-man/piston
    if %errorlevel% neq 0 (
        echo [ERROR] No se pudo crear el contenedor de Piston.
        pause
        exit /b 1
    )
    echo [Piston] Esperando que arranque...
    timeout /t 5 /nobreak >nul

    echo [Piston] Instalando runtimes (puede tardar varios minutos)...
    docker exec piston piston install python
    docker exec piston piston install javascript
    docker exec piston piston install java
    docker exec piston piston install c++
    docker exec piston piston install csharp
    echo [Piston] Runtimes instalados.
) else (
    docker start piston >nul 2>&1
    echo [OK] Contenedor Piston arrancado.
)

REM --- Comprobar que Piston responde ---
echo [Piston] Comprobando API...
timeout /t 3 /nobreak >nul
curl -s http://localhost:2000/api/v2/runtimes >nul 2>&1
if %errorlevel% neq 0 (
    echo [AVISO] Piston todavia no responde. Puede necesitar unos segundos mas.
)

REM --- Web ---
echo [Web] Arrancando servidor de desarrollo...
if exist pnpm-lock.yaml (
    pnpm dev
) else (
    npm run dev
)

endlocal
