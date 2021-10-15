import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput) {
      saveBook(bookData:$bookData) {
        _id
        username
        email
        savedBooks {
          authors
          description
          title
          bookId
          image
          link
        }
      }
  }
`

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
      removeBook(bookId: $bookId) {
        username
        email
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
      }
  }
`