

const typeDefs = `#graphql
    type Quiz {
        id: ID!
        title: String!
        questions: [Question!]
    }
    type Question { 
        id: ID!
        question: String!
        options: [String!]!
        correctAnswer: String!
        quiz: Quiz
    }
    type User {
        displayName: String!
    }
    type Scores {
        quizId: ID!,
        userName: String!,
        score: Int!
    }

    type Query { 
        Quizzes: [Quiz]
        Quiz(id :ID!): Quiz
        Scores(quizId: ID!): [Scores]
        User(displayName: String!): User
        Users: [User]
    }

    type Mutation {
        updateScore(quizId: ID!, userName: String!, score: Int!): Status
        createQuiz(id: ID!, title: String!): Status
        createQuestion(id:ID!, quesion: String!, correctAnswer: String!, options: [String!]!): Status
    }

    enum Status {
        SUCCESS
        FAILED
    }
`

export default typeDefs;