import {
    authors,
    posts,
    PostOps
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
        Post: () => Promise.resolve(PostOps)
    },
    Author: {
        posts: (author) => posts.filter(p => p.authorId === author.id)
    },
    Post: {
        author: (post) => authors.find(a => a.id === post.authorId)
    }
};


export default rootResolvers;