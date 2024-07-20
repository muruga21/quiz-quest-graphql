import mongoose from 'mongoose';

const { Schema } = mongoose;

const questionSchema = new Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
  quiz: { type: Schema.Types.ObjectId, ref: 'Quiz' }
});

const Question = new mongoose.model('Question', questionSchema);

export { Question };