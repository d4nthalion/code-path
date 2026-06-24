# CodePath

Plataforma web para aprender programación con teoría, ejercicios prácticos, IDE integrado (Monaco Editor) y corrección por IA (Gemini).

**Lenguajes:** JavaScript, Python, Java, C++, C#

**Temas:** Fundamentos, Estructuras de Control, Bucles, Arrays, Funciones, POO, Programación Funcional

---

## Requisitos

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)
- API key de Gemini (para la corrección por IA)
- API key de Judge0 **o** Docker (para la ejecución de código)

---

## Configuración

### 1. Clonar e instalar dependencias

```bash
git clone https://github.com/d4nthalion/code-path.git
cd code-path
pnpm install
```

### 2. Crear el archivo `.env`

Copia el ejemplo y rellena tus keys:

```bash
cp .env.example .env
```

```env
# Gemini API (corrección de ejercicios)
# Obtén la key en: https://aistudio.google.com → "Get API key"
VITE_GEMINI_API_KEY=AIza...

# Ejecución de código — elige UNA opción:

# Opción A: Judge0 vía RapidAPI (gratis, 50 calls/día)
# Obtén la key en: https://rapidapi.com/judge0-official/api/judge0-ce → plan Basic
VITE_JUDGE0_KEY=...

# Opción B: Self-hosted Piston (Docker, sin límites)
# Ver instrucciones abajo
# VITE_PISTON_URL=http://localhost:2000/api/v2
```

### 3. Levantar en local

```bash
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173).

---

## Ejecución de código: opciones

### Opción A — Judge0 (sin Docker)

1. Regístrate en [RapidAPI](https://rapidapi.com/judge0-official/api/judge0-ce)
2. Suscríbete al plan **Basic** (gratis)
3. Copia tu `X-RapidAPI-Key` y ponla en `.env` como `VITE_JUDGE0_KEY`

### Opción B — Self-hosted Piston (sin límites)

Requiere [Docker](https://www.docker.com/get-started).

```bash
docker run -d --name piston --privileged -p 2000:2000 ghcr.io/engineer-man/piston

# Instala los runtimes que necesites:
docker exec piston piston install python
docker exec piston piston install javascript
docker exec piston piston install java
docker exec piston piston install c++
docker exec piston piston install csharp
```

En `.env`:

```env
VITE_PISTON_URL=http://localhost:2000/api/v2
```

---

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Monaco Editor
- React Router v7
- Piston API / Judge0 CE (ejecución de código)
- Gemini 2.0 Flash (corrección por IA)
