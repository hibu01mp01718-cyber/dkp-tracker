import dbConnect from '../../../lib/mongodb';
import DKPEntry from '../../../models/DKPEntry';

export default async function handler(req, res) {
  await dbConnect;
  if (req.method === 'GET') {
    const { guild } = req.query;
    const dkpEntries = await DKPEntry.find(guild ? { guild } : {}).populate('user').populate('guild');
    res.status(200).json(dkpEntries);
  } else if (req.method === 'POST') {
    const { user, guild, value, reason } = req.body;
    const entry = new DKPEntry({ user, guild, value, reason });
    await entry.save();
    res.status(201).json(entry);
  } else {
    res.status(405).end();
  }
}
