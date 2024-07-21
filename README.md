# Quiz Quest GraphQL Backend

## Overview

Quiz Quest is a GraphQL-based backend for managing quizzes, questions, users, and scores. It is built using Node.js, Apollo Server, and MongoDB. This backend allows you to create, read, update, and delete quizzes and questions, as well as manage user scores.

## Features

- GraphQL API for managing quizzes, questions, users, and scores
- MongoDB for data storage
- Apollo Server for GraphQL

## Setup

### Prerequisites

- Node.js (>=14.x.x)
- npm (>=6.x.x)
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/quiz-quest-graphql.git
   cd quiz-quest-graphql

2. Create .env file
      MONGO_URI= "your mongodb uri"
3. install dependencies
      npm install
4. Start server
     npm start

###Queries
# Queries

# Get all quizzes
query GetAllQuizzes {
  Quizzes {
    id
    title
    questions {
      id
      question
      options
      correctAnswer
    }
  }
}

# Get a quiz by ID
query GetQuizById($id: ID!) {
  Quiz(id: $id) {
    id
    title
    questions {
      id
      question
      options
      correctAnswer
    }
  }
}

# Get scores by quiz ID
query GetScoresByQuizId($quizId: ID!) {
  Scores(quizId: $quizId) {
    quizId
    userName
    score
  }
}

# Get a user by display name
query GetUserByDisplayName($displayName: String!) {
  User(displayName: $displayName) {
    displayName
  }
}

# Get all users
query GetAllUsers {
  Users {
    displayName
  }
}

# Mutations

# Update score
mutation UpdateScore($quizId: ID!, $userName: String!, $score: Int!) {
  updateScore(quizId: $quizId, userName: $userName, score: $score) {
    SUCCESS
    FAILED
  }
}

# Create a new quiz
mutation CreateQuiz($id: ID!, $title: String!) {
  createQuiz(id: $id, title: $title) {
    SUCCESS
    FAILED
  }
}

# Create a new question
mutation CreateQuestion($id: ID!, $question: String!, $correctAnswer: String!, $options: [String!]!) {
  createQuestion(id: $id, question: $question, correctAnswer: $correctAnswer, options: $options) {
    SUCCESS
    FAILED
  }
}

