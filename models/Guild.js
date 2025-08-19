import mongoose from 'mongoose';

const GuildSchema = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true },
  name: String,
  icon: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  dkpTable: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, dkp: Number }],
});

export default mongoose.models.Guild || mongoose.model('Guild', GuildSchema);
