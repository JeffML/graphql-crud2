export default `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post] # the list of Posts by this author
    books: [Book] # the list of Books by this author
}`
