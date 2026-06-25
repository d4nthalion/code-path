export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  // Use non-VITE_ prefixed vars for server-side secrets (not exposed to browser bundle)
  const clientId = env.JDOODLE_CLIENT_ID;
  const clientSecret = env.JDOODLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response(
      JSON.stringify({ output: 'JDoodle no configurado en el servidor.', statusCode: 500 }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const payload = {
    clientId,
    clientSecret,
    script: body.script,
    language: body.language,
    versionIndex: body.versionIndex,
    stdin: body.stdin ?? '',
  };

  const res = await fetch('https://api.jdoodle.com/v1/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
