import gemini from '../utils/gemini.js'

export default async function askGemini(req, res) {
  try {
    const content = req.body;
    const result = await gemini(content);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message || 'Server error' });
  }
}