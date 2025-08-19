import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  discordId: { type: String, required: true, unique: true },
  name: String,
  avatar: String,
  guilds: [String],
  role: { type: String, enum: ['admin', 'officer', 'member'], default: 'member' },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
