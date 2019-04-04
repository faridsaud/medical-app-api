import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

const nonPathologicalHistorySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
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

module.exports = mongoose.model('NonPathologicalHistory', nonPathologicalHistorySchema);
