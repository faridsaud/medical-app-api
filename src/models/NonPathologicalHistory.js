import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

export const nonPathologicalHistorySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: String, ref: 'User'},
  feedingHabits: {
    breakfast: String,
    midMorning: String,
    launch: String,
    midAfternoon: String,
    dinner: String,
  },
  exercise: String,
  dreamQuality: String,
  medications: String,
  facialCare: String,
  toxic: String,
});

export default mongoose.model('NonPathologicalHistory', nonPathologicalHistorySchema);
