import React, { Component } from 'react'
import Book from './Components/book'

class BookShelf extends Component {
  render() {
    const { name, books } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              <li key={book.id}>
                <Book
                  coverImageUrl={book.thumbnail}
                  title={book.title}
                  author={book.author}
                />
              </li>
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf