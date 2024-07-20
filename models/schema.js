

const typeDefs = `#graphql
    type Quiz {
        id: ID!
        title: String!
        questions: [Question!]
    }
    type Question { 
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
        createQuiz(title: String!): Status
        createQuestion(quizId:ID!, question: String!, correctAnswer: String!, options: [String!]!): Status
    }

    enum Status {
        SUCCESS
        FAILED
    }
`

export default typeDefs;