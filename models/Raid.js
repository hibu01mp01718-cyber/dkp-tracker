import mongoose from 'mongoose';

const RaidSchema = new mongoose.Schema({
  guild: { type: mongoose.Schema.Types.ObjectId, ref: 'Guild' },
  name: String,
  date: { type: Date, default: Date.now },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  loot: [{ item: String, winner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }],
});

export default mongoose.models.Raid || mongoose.model('Raid', RaidSchema);
