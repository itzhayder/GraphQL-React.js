import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {
  getBookDetails = () => {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h3>{book.name}</h3>
          <p>Genre: {book.genre}</p>
          <p>Author: {book.author.name}</p>
          <p>Books from this author:</p>
          <ul>
            {book.author.books.map(b => <li key={b.id}>{b.name}</li>
            )}
          </ul>
        </div>
      );
    } else {
      return "";
    }
  }

  render() {
    return (
      <div id="book-details">
        {this.getBookDetails()}
      </div>
    )
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);