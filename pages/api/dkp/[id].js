import dbConnect from '../../../lib/mongodb';
import DKPEntry from '../../../models/DKPEntry';

export default async function handler(req, res) {
  await dbConnect;
  const { id } = req.query;
  if (req.method === 'GET') {
    const entry = await DKPEntry.findById(id).populate('user').populate('guild');
    if (!entry) return res.status(404).json({ error: 'Entry not found' });
    res.status(200).json(entry);
  } else if (req.method === 'PUT') {
    const { value, reason } = req.body;
    const entry = await DKPEntry.findByIdAndUpdate(id, { value, reason }, { new: true });
    res.status(200).json(entry);
  } else if (req.method === 'DELETE') {
    await DKPEntry.findByIdAndDelete(id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
