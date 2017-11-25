import Author from './components/author'
import Post from './components/post'
import Book from './components/book'

const typeDefs =
    `
  # the schema allows the following query:
  extend type Query {
    posts: [Post]
    author(id: Int!): Author
  }

  # this schema allows the following mutations:
input AddBookInput {
    ISBN: String!
    title: String!
}

input RemoveBookInput {
    bookId: Int!
}
  input UpdateBookInput {
      ISBN: String!
      title: String!
  }

  extend type Mutation {
    Post: PostOps
    Author(id: Int!): AuthorOps
  }

  type PostOps {
      upvote(postId: Int!): Post
      downvote(postId: Int!): Post
  }

  type AuthorOps {
      addBook(input: AddBookInput!): Int
      removeBook(input: RemoveBookInput! ): Boolean
      updateBook(input: UpdateBookInput!): Int
  }
`;

export default [typeDefs, Author, Post, Book];