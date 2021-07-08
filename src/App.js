import React from 'react'
import { Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from "./component/books";
import ListBooks from "./component/ListBooks";
import SearchBooks from "./component/SearchBooks";

class BooksApp extends React.Component {
  state = {
    Books: []
  }

  componentDidMount() {
      this.fetch_books_details()
  }

    fetch_books_details = ()=> {
        BooksAPI.getAll().then((books) => {
            this.setState({Books: books})
        })
    }

    updateBookDetails = (book, shelf) => {
      BooksAPI.update(book,shelf).then(() => {
          this.fetch_books_details()
        })
    }

    render() {
    return (
        <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          <Route exact path="/" render={() => (
              <ListBooks/>
          )}

          />
          <Route path="/search" render={({ history }) => (
              <SearchBooks />
          )}

          />
        </div>
        </div>
    )
  }
}

export default BooksApp
