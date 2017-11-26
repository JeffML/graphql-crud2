const authors = [{
    id: 1,
    firstName: 'Tom',
    lastName: 'Coleman'
}, {
    id: 2,
    firstName: 'Sashko',
    lastName: 'Stubailo'
}, {
    id: 3,
    firstName: 'Mikhail',
    lastName: 'Novikov'
}, {
    id: 4,
    firstName: 'Jeff',
    lastName: 'Lowery'
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

var books = [{
    authorId: 2,
    ISBN: "233-9870987098",
    title: "Navigating Your Transition to GraphQL"
}, {
    authorId: 3,
    ISBN: "978-4322342222",
    title: "The Nature of Sensation"
}, {
    authorId: 4,
    ISBN: "978-1930110151",
    title: "XML Schema Elucidated"
}, ]

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

const addBook = (book, authorId) => {
    console.log("addBook", book, authorId)
    return new Promise((resolve, reject) => {
        book.authorId = authorId
        books.push(book)
        resolve(books.length)
    })
}

const removeBook = (book, authorId) => {
    return new Promise((resolve, reject) => {
        books = books.filter(b => b.ISBN !== book.ISBN && b.authorId === authorId);
        resolve(books.length)
    })
}

const updateBook = (book, authorId) => {
    return new Promise((resolve, reject) => {
        let old = books.find(b => b.ISBN === book.ISBN && b.authorId === authorId);
        if (!old) {
            reject(`Book with ISBN = ${book.ISBN} not found`)
            return
        }
        resolve(Object.assign(old, book))
    })
}

const AuthorOps = (authorId) => ({
    addBook: ({
        input
    }) => addBook(input, authorId),
    removeBook: ({
        input
    }) => removeBook(input, authorId),
    updateBook: ({
        input
    }) => updateBook(input, authorId)
})

export {
    authors,
    posts,
    books,
    PostOps,
    AuthorOps
};