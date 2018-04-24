import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//components
import BookList from "./Components/BookList";
import AddBook from "./Components/addBook";

// Apollo Client setup
const client = new ApolloClient({
  uri: "http://localhost:3020/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Ryan's Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
