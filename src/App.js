//Librar(y|ies)
import React from 'react'
import { Route, Link } from 'react-router-dom'

//Components
import SearchBar from './Components/searchBar'
import BookShelf from './Components/bookShelf'

//Provided API Code
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelves: {
      currentlyReading: "Currently Reading",
      wantToRead: "Want to Read",
      read: "Read",
    },
    books: []
  }

  componentDidMount = () =>
  {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBar />
        )} />
        <Route path="/" exact render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {Object.keys(this.state.shelves).map((key) => {
                  return (
                  <BookShelf key={key}
                    title={this.state.shelves[key]}
                    books={this.state.books.filter((book) => book.shelf === key)}
                  />
                )})}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
