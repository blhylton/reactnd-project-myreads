import React, { Component } from 'react'
import BookEntry from './bookEntry'

class BookShelf extends Component {
  render() {
    const { name, books } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              return (
                <li key={book.id}>
                  <BookEntry
                    thumbnail={book.imageLinks.thumbnail}
                    title={book.title}
                    authors={book.authors}
                  />
                </li>
              )}
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf