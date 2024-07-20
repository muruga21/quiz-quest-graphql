import mongoose from 'mongoose';

const { Schema } = mongoose;

const quizSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
});

const Quiz = mongoose.model('Quiz', quizSchema);

export { Quiz };