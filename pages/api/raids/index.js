import dbConnect from '../../../lib/mongodb';
import Raid from '../../../models/Raid';

export default async function handler(req, res) {
  await dbConnect;
  if (req.method === 'GET') {
    const { guild } = req.query;
    const raids = await Raid.find(guild ? { guild } : {}).populate('guild').populate('attendees').populate('loot.winner');
    res.status(200).json(raids);
  } else if (req.method === 'POST') {
    const { guild, name, date, attendees, loot } = req.body;
    const raid = new Raid({ guild, name, date, attendees, loot });
    await raid.save();
    res.status(201).json(raid);
  } else {
    res.status(405).end();
  }
}
