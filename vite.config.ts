import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { Plugin } from 'vite'

function jdoodleProxy(): Plugin {
  return {
    name: 'jdoodle-proxy',
    configureServer(server) {
      const env = loadEnv('development', process.cwd(), '')

      server.middlewares.use('/api/execute', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }

        let raw = '';
        req.on('data', (chunk: Buffer) => { raw += chunk.toString(); });
        req.on('end', async () => {
          try {
            const body = JSON.parse(raw || '{}');
            const payload = {
              clientId: env.JDOODLE_CLIENT_ID,
              clientSecret: env.JDOODLE_CLIENT_SECRET,
              script: body.script ?? '',
              language: body.language ?? 'nodejs',
              versionIndex: body.versionIndex ?? '4',
              stdin: body.stdin ?? '',
            };

            const upstream = await fetch('https://api.jdoodle.com/v1/execute', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload),
            });

            const data = await upstream.text();
            res.statusCode = upstream.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: String(e) }));
          }
        });
      });
    },
  };
}

export default defineConfig({
  base: '/codepath/',
  plugins: [react(), tailwindcss(), jdoodleProxy()],
  server: {
    proxy: {
      '/piston': {
        target: 'http://localhost:2000/api/v2',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/piston/, ''),
      },
    },
  },
})
