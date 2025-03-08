import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['developer', 'company'], default: 'developer' },
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
