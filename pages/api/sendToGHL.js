export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const ghlRes = await fetch(
      'https://services.leadconnectorhq.com/hooks/DvWTrdD23UD09zv6GgZj/webhook-trigger/afc4eeb6-e80d-4c93-9f92-673c1da4c630',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      }
    );

    const text = await ghlRes.text();
    return res.status(200).json({ success: true, ghlResponse: text });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false });
  }
}

