import mongoose from 'mongoose';

const HackathonSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  deadline: Date,
  reward: Number,
  submissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Submission' }],
}, { timestamps: true });

export default mongoose.model('Hackathon', HackathonSchema);
