//Librar(y|ies)
import React from 'react'
import { Route, Link } from 'react-router-dom'

//Child Components
import SearchBar from './Components/searchBar'
import BookShelf from './Components/bookShelf'

//Provided API Code
import * as BooksAPI from './Utils/BooksAPI'

//Styles
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelves: {
      currentlyReading: "Currently Reading",
      wantToRead: "Want to Read",
      read: "Read",
    },
    books: [],
    apiLoaded: false
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books, apiLoaded: true })
    })
  }

  moveBook = (book, shelf) => {
    this.setState({apiLoaded: false})
    BooksAPI.update(book, shelf).then((s) => {
      book.shelf = shelf
      this.setState(
        {
          books: this.state.books.filter((b) => book.id !== b.id ).concat(book),
          apiLoaded: true
        }
      )
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
                {this.state.apiLoaded &&
                  Object.keys(this.state.shelves).map((key) => (
                    <BookShelf
                      key={key}
                      title={this.state.shelves[key]}
                      books={this.state.books.filter((book) => book.shelf === key)}
                      onBookMove={this.moveBook}
                    />
                  ))
                }

                {!this.state.apiLoaded &&
                  (
                    <span className="loading">Loading</span>
                  )
                }
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
