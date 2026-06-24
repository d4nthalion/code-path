@echo off
setlocal enabledelayedexpansion
title CodePath Dev Server

echo [CodePath] Iniciando...
echo.

REM Comprobar que Docker CLI existe
where docker >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker no encontrado en el PATH.
    echo         Instala Docker Desktop desde https://www.docker.com/products/docker-desktop
    echo         y reinicia la terminal despues de instalarlo.
    echo.
    pause
    exit /b 1
)

REM Comprobar que el daemon de Docker corre
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker esta instalado pero no corre.
    echo         Abre Docker Desktop, espera a que el icono este verde,
    echo         y vuelve a ejecutar este script.
    echo.
    pause
    exit /b 1
)
echo [OK] Docker disponible.

REM Piston: crear o arrancar
docker inspect piston >nul 2>&1
if %errorlevel% neq 0 goto crear_piston
goto arrancar_piston

:crear_piston
echo [Piston] Creando contenedor por primera vez...
docker volume create piston_data >nul 2>&1
docker run -d --name piston --privileged -v piston_data:/piston -p 2000:2000 ghcr.io/engineer-man/piston
if !errorlevel! neq 0 (
    echo [ERROR] No se pudo crear el contenedor de Piston.
    pause
    exit /b 1
)
echo [Piston] Esperando que la API arranque...
timeout /t 10 /nobreak >nul

REM Instalar runtimes via HTTP API
echo [Piston] Instalando runtimes via API, puede tardar varios minutos...
curl -s -X POST http://localhost:2000/api/v2/packages -H "Content-Type: application/json" -d "{\"language\":\"python\",\"version\":\"3.10.0\"}" >nul
echo [Piston]   python OK
curl -s -X POST http://localhost:2000/api/v2/packages -H "Content-Type: application/json" -d "{\"language\":\"javascript\",\"version\":\"18.15.0\"}" >nul
echo [Piston]   javascript OK
curl -s -X POST http://localhost:2000/api/v2/packages -H "Content-Type: application/json" -d "{\"language\":\"java\",\"version\":\"15.0.2\"}" >nul
echo [Piston]   java OK
curl -s -X POST http://localhost:2000/api/v2/packages -H "Content-Type: application/json" -d "{\"language\":\"c++\",\"version\":\"10.2.0\"}" >nul
echo [Piston]   c++ OK
curl -s -X POST http://localhost:2000/api/v2/packages -H "Content-Type: application/json" -d "{\"language\":\"csharp\",\"version\":\"6.12.0\"}" >nul
echo [Piston]   csharp OK
echo [Piston] Runtimes instalados.
goto comprobar_api

:arrancar_piston
docker start piston >nul 2>&1
echo [OK] Contenedor Piston arrancado.
timeout /t 4 /nobreak >nul

:comprobar_api
echo.
echo [Piston] Comprobando API...
timeout /t 3 /nobreak >nul
curl -s http://localhost:2000/api/v2/runtimes >nul 2>&1
if !errorlevel! neq 0 (
    echo [AVISO] Piston aun no responde, las primeras ejecuciones pueden tardar.
) else (
    echo [OK] Piston API respondiendo.
)

echo.
echo [Web] Arrancando en http://localhost:5173
echo [Web] Pulsa Ctrl+C para detener.
echo.

if exist pnpm-lock.yaml (
    pnpm dev
) else (
    npm run dev
)

echo.
echo [CodePath] Servidor detenido.
pause
endlocal
