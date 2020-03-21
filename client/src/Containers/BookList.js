import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
  state = {
    selected: ""
  };

  getBooksHandler = () => {
    const data = this.props.data;

    if (data.loading) {
      return (
        <div>Loading books...</div>
      );
    } else {
      const books = data.books.map(book => <li key={book.id} onClick={() => this.setState({ selected: book.id })} >{book.name}</li>);
      return books;
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.getBooksHandler()}
        </ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);