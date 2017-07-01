import React, { Component } from 'react'
import BookEntry from './bookEntry'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const { title, books, onBookMove } = this.props

    books.sort(sortBy('title'))

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.length > 0 ?
              books.map((book) => {
                return (
                  <li key={book.id}>
                    <BookEntry
                      book={book}
                      onShelfChange={onBookMove}
                    />
                  </li>
                )
              })
              :
              (<span>No books on this shelf.</span>)
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf