import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright';

import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

class AddBook extends Component {
  state = {
    name: '',
    genre: '',
    authorId: ''
  };

  authorHandler = () => {
    const data = this.props.getAuthorsQuery;
    if (data.loading) {
      return (<option disabled>Loading author</option>);
    } else {
      return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>);
    }
  }

  submitForm = e => {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [
        { query: getBooksQuery }
      ]
    });
  }

  render() {
    return (
      <form id='add-book' onSubmit={this.submitForm}>
        <div className="field">
          <label>Book Name: </label>
          <input type="text" onChange={e => this.setState({ name: e.target.value })} />
        </div>

        <div className="field">
          <label>Genre: </label>
          <input type="text" onChange={e => this.setState({ genre: e.target.value })} />
        </div>

        <div className="field">
          <label>Author</label>
          <select onChange={e => this.setState({ authorId: e.target.value })} >
            <option>Select author</option>
            {this.authorHandler()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);