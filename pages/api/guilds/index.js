import dbConnect from '../../../lib/mongodb';
import Guild from '../../../models/Guild';

export default async function handler(req, res) {
  await dbConnect;
  if (req.method === 'GET') {
    const guilds = await Guild.find({});
    res.status(200).json(guilds);
  } else if (req.method === 'POST') {
    const { guildId, name, icon } = req.body;
    const guild = new Guild({ guildId, name, icon });
    await guild.save();
    res.status(201).json(guild);
  } else {
    res.status(405).end();
  }
}
