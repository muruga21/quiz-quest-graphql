import data from '../data/Quiz.json' assert { type: 'json' };

const resolvers = {
    Query : {
        Quizzes: () => data.quizzes,
        Quiz: (_, {id}) => data.quizzes.find((quiz)=> quiz.id === id),
        // Quiz (_, {id}) {
        //     return data.quizzes.find((quiz)=>{
        //         (quiz.id === id)
        //     })
        // },
        Users: () => data.users,
        User: (_, {displayName}) => data.users.find((user)=> user.displayName === displayName),
        Scores: (_, {quizId}) => data.scores.filter((score)=> score.quizId === quizId)
    },

    Quiz : {
        questions: (parent)=> data.questions.filter((quesion)=> quesion.quizId === parent.id)
    },

    Mutation : {
        updateScore: (_, {quizId, userName, score}) => {
            data.scores.forEach((scr)=>{
                if(scr.quizId === quizId && scr.userName === userName){
                    scr.score = score;
                }
            })
            return "SUCCESS"
        },
        createQuiz: ( _, {id, title}) => {
            data.quizzes.push({
                id: id,
                title: title
            })
            return "SUCCESS"
        }
    }

}

export default resolvers