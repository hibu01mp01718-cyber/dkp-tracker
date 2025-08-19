import dbConnect from '../../../lib/mongodb';
import Guild from '../../../models/Guild';

export default async function handler(req, res) {
  await dbConnect;
  const { id } = req.query;
  if (req.method === 'GET') {
    const guild = await Guild.findOne({ guildId: id }).populate('members');
    if (!guild) return res.status(404).json({ error: 'Guild not found' });
    res.status(200).json(guild);
  } else if (req.method === 'PUT') {
    const { name, icon } = req.body;
    const guild = await Guild.findOneAndUpdate({ guildId: id }, { name, icon }, { new: true });
    res.status(200).json(guild);
  } else if (req.method === 'DELETE') {
    await Guild.findOneAndDelete({ guildId: id });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
