//Librar(y|ies)
import React from 'react'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

//Child Components
import BookEntry from './bookEntry'

const BookShelf = (props) => {
  props.books.sort(sortBy('title'))

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.length > 0 ?
            props.books.map((book) => {
              return (
                <li key={book.id}>
                  <BookEntry
                    book={book}
                    onShelfChange={props.onBookMove}
                  />
                </li>
              )
            })
            :
            (<span className="no-shelf">No books match this criterion.</span>)
          }
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}

export default BookShelf
