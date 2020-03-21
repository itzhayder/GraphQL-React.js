import { gql } from 'apollo-boost';

const getBooksQuery = gql`
{
  books{
    name
    genre
    id
  }
}
`;

const getAuthorsQuery = gql`
  {
    authors{
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query($id: ID){
    book(id: $id) {
      id
      name
      genre
      author{
        name
        age
        books{
          name
          genre
          id
        }
      }
    }
  }
`;
const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId){
      name
      id
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };