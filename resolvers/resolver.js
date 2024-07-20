import data from '../data/Quiz.json' assert { type: 'json' };
import { Quiz } from '../models/Quiz.js';
import { Scores } from '../models/Scores.js';
import { Question } from '../models/Question.js';

const resolvers = {
    Query : {
        Quizzes: async () => await Quiz.find().populate('questions'),
        Quiz: async (_, {id}) => {
          return await Quiz.findById(id);
        },
        Users: async () => await User.find(),
        User: async (_, {displayName}) => await User.findOne({ displayName }),
        Scores: async (_, {quizId}) => await Scores.find({ quizId })
    },

    Quiz : {
        questions: async(parent)=> {
          console.log(parent.id);
          return await Question.find({ quiz: parent.id })
        }
    },

    Mutation : {
        updateScore: async(_, {quizId, userName, score}) => {
            try {
                await Scores.findOneAndUpdate({ quizId, userName }, { score }, { upsert: true });
                return 'SUCCESS';
              } catch (error) {
                console.error(error);
                return 'FAILED';
              }
        },
        createQuiz: async (_, { title }) => {
            try {
              await Quiz.create({ title });
              return 'SUCCESS';
            } catch (error) {
              console.error(error);
              return 'FAILED';
            }
          },

          createQuestion: async (_, { quizId, question, correctAnswer, options }) => {
            try {
              const quiz = await Quiz.findOne({ _id:quizId });
              if (!quiz) {
                console.log(quiz)
                return 'FAILED';
              }
              console.log("check")
              const newQuestion = new Question({ question, correctAnswer, options, quiz: quizId });
                await newQuestion.save();
                // quiz.questions.push(newQuestion._id);
                // await quiz.save();
              return 'SUCCESS';
            } catch (error) {
              console.error(error);
              return 'FAILED';
            }
          }
    }

}

export default resolvers