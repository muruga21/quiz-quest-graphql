import mongoose from 'mongoose';

const { Schema } = mongoose;

const scoresSchema = new Schema({
    quizId: { type: String, required: true },
    userName: { type: String, required: true },
    score: { type: Number, required: true }
});

const Scores = mongoose.model('Scores', scoresSchema);

export { Scores };