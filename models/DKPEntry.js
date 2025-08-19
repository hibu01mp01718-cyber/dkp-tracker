import mongoose from 'mongoose';

const DKPEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  guild: { type: mongoose.Schema.Types.ObjectId, ref: 'Guild' },
  value: Number,
  reason: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.models.DKPEntry || mongoose.model('DKPEntry', DKPEntrySchema);
