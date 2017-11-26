import {
    authors,
    posts,
    books,
    PostOps,
    AuthorOps
} from './dataSource';

/* eslint-disable no-unused-labels */

const rootResolvers = {
    Query: {
        posts: () => posts,
        author: (_, {
            id
        }) => {
            return authors.find(a => a.id === id)
        }
    },
    Mutation: {
        Post: () => PostOps,
        Author: (_, {
            id
        }) => AuthorOps(id)
    },
    Author: {
        posts: (author) => posts.filter(p => p.authorId === author.id),
        books: (author) => books.filter(b => b.authorId === author.id)
    },
    Post: {
        author: (post) => authors.find(a => a.id === post.authorId)
    }
};


export default rootResolvers;