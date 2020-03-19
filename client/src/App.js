import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//containers
import BookList from './Containers/BookList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Ninja's Book List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
