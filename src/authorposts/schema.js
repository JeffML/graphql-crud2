import Author from './components/author'
import Post from './components/post'
import Book from './components/book'
import gql from 'graphql-tag'

const typeDefs =
    gql `
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
          updateBook(input: UpdateBookInput!): Book
      }
`;

export default [typeDefs, Author, Post, Book];