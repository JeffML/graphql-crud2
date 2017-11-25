const authors = [{
    id: 1,
    firstName: 'Tom',
    lastName: 'Coleman'
}, {
    id: 2,
    firstName: 'Sashki',
    lastName: 'Stubailo'
}, {
    id: 3,
    firstName: 'Mikhail',
    lastName: 'Novikov'
}];

const posts = [{
    id: 1,
    authorId: 1,
    title: 'Introduction to GraphQL',
    votes: 2
}, {
    id: 2,
    authorId: 2,
    title: 'Welcome to Meteor',
    votes: 3
}, {
    id: 3,
    authorId: 2,
    title: 'Advanced GraphQL',
    votes: 1
}, {
    id: 4,
    authorId: 3,
    title: 'Launchpad is Cool',
    votes: 7
}];

const voteHandler = (postId, updown) => {
    return new Promise((resolve, reject) => {
        const post = posts.find(p => p.id === postId);
        if (!post) {
            reject(`Couldn't find post with id ${postId}`);
        }
        post.votes += updown;
        resolve(post);
    })
};

const PostOps =
    ({
        upvote: ({
            postId
        }) => voteHandler(postId, 1),
        downvote: ({
            postId
        }) => voteHandler(postId, -1)
    });


export {
    authors,
    posts,
    PostOps
};