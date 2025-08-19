import dbConnect from '../../../lib/mongodb';
import Raid from '../../../models/Raid';

export default async function handler(req, res) {
  await dbConnect;
  const { id } = req.query;
  if (req.method === 'GET') {
    const raid = await Raid.findById(id).populate('guild').populate('attendees').populate('loot.winner');
    if (!raid) return res.status(404).json({ error: 'Raid not found' });
    res.status(200).json(raid);
  } else if (req.method === 'PUT') {
    const { name, date, attendees, loot } = req.body;
    const raid = await Raid.findByIdAndUpdate(id, { name, date, attendees, loot }, { new: true });
    res.status(200).json(raid);
  } else if (req.method === 'DELETE') {
    await Raid.findByIdAndDelete(id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
