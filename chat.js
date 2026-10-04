// Optional AI backend. Set ANTHROPIC_API_KEY in Netlify > Site settings > Environment variables. Never put the key in frontend code.
const FACTS = require('./portfolio-facts.json'); // copy of the portfolio facts (projects, services, tools, contact)
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };
  const { message } = JSON.parse(event.body || '{}');
  if (!message || message.length > 500) return { statusCode: 400, body: JSON.stringify({ reply: '' }) };
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({
      model: process.env.CHAT_MODEL || 'claude-haiku-4-5-20251001', max_tokens: 400,
      system: 'You are Joselle AI. Answer ONLY from these facts: ' + JSON.stringify(FACTS) + '. Never invent experience, clients, certifications, awards, skills, pricing or results. If unknown, reply exactly: "I don\'t have that information yet, but you can contact Joselle directly."',
      messages: [{ role: 'user', content: message }]
    })
  });
  const d = await r.json();
  return { statusCode: 200, body: JSON.stringify({ reply: d.content?.[0]?.text || '' }) };
};
