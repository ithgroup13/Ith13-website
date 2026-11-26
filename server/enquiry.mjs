import { createServer } from 'node:http';

const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
if (!accessKey) throw new Error('Set WEB3FORMS_ACCESS_KEY on the server before starting the form handler.');

const maxBodyBytes = 24 * 1024;
const allowedOrigins = new Set(['https://ith13.com', 'https://www.ith13.com']);
const divisionFields = {
  sport: ['garment_type', 'quantity', 'frequency'],
  marine: ['vessel', 'vessel_count', 'work', 'cycle', 'rollout'],
  event: ['event_type', 'order_type', 'products', 'frequency'],
};
const commonFields = ['first_name', 'last_name', 'company', 'email', 'message'];

function reply(response, status) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  response.end(JSON.stringify({ success: status === 200 }));
}

const server = createServer(async (request, response) => {
  if (request.url !== '/api/enquiry') return reply(response, 404);
  if (request.method !== 'POST') return reply(response, 405);
  if (!allowedOrigins.has(request.headers.origin)) return reply(response, 403);
  if (request.headers['content-type']?.split(';', 1)[0] !== 'application/x-www-form-urlencoded') {
    return reply(response, 415);
  }
  if (Number(request.headers['content-length']) > maxBodyBytes) return reply(response, 413);

  try {
    const chunks = [];
    let size = 0;
    for await (const chunk of request) {
      size += chunk.length;
      if (size > maxBodyBytes) return reply(response, 413);
      chunks.push(chunk);
    }

    const data = new URLSearchParams(Buffer.concat(chunks).toString('utf8'));
    const division = data.get('division');
    if (!Object.hasOwn(divisionFields, division)) return reply(response, 400);
    if (['first_name', 'last_name', 'email'].some(field => !data.get(field)?.trim())) {
      return reply(response, 400);
    }

    const upstreamForm = new FormData();
    for (const field of [...commonFields, ...divisionFields[division]]) {
      const value = data.get(field);
      if (value !== null) upstreamForm.set(field, value);
    }
    upstreamForm.set('access_key', accessKey);
    upstreamForm.set('subject', 'New ITH ' + division.charAt(0).toUpperCase() + division.slice(1) + ' enquiry — ith13.com');
    upstreamForm.set('from_name', 'ITH Group website');
    upstreamForm.set('division', division);
    upstreamForm.set('botcheck', '');

    const upstream = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: upstreamForm,
      headers: {
        Accept: 'application/json',
        Origin: request.headers.origin,
        Referer: request.headers.origin + '/',
      },
      signal: AbortSignal.timeout(10000),
      redirect: 'error',
    });
    const result = await upstream.json();
    reply(response, upstream.ok && result.success ? 200 : 502);
  } catch {
    reply(response, 502);
  }
});

server.requestTimeout = 15000;
server.listen(Number(process.env.PORT || 3000), process.env.HOST || '127.0.0.1');
