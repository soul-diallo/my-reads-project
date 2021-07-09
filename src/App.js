import React from 'react'
import { Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from "./component/ListBooks";
import SearchBooks from "./component/SearchBooks";

class BooksApp extends React.Component {
  state = {
    Books: []
  }

  componentDidMount() {
      this.fetchBookDetails()
  }

    fetchBookDetails = ()=> {
        BooksAPI.getAll().then((books) => {
            this.setState({Books: books})
        })
    }

    updateBookDetails = (book, shelf) => {
      BooksAPI.update(book,shelf).then(() => {
          this.fetchBookDetails()
        })
    }

    render() {
    return (
        <div className="app">
          <Route exact path="/" render={() => (<ListBooks books={this.state.Books} onChange={this.updateBookDetails}/>)}/>
          <Route path="/search" render={() => (<SearchBooks onChange={this.updateBookDetails} myBooks={this.state.Books}/>)}/>

        </div>
    )
  }
}

export default BooksApp
