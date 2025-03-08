import mongoose from 'mongoose';

const SubmissionSchema = new mongoose.Schema({
  hackathon: { type: mongoose.Schema.Types.ObjectId, ref: 'Hackathon' },
  developer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  link: String, 
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
}, { timestamps: true });

export default mongoose.model('Submission', SubmissionSchema);
