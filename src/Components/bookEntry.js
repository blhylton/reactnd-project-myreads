//Librar(y|ies)
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookEntry extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  moveBook = (e) => {
    this.props.onShelfChange(this.props.book, e.target.value);
  }

  render() {
    const { book } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.moveBook} value={book.shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading" >Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        {typeof book.authors !== 'undefined' && (
          <div className="book-authors">{ book.authors.join(', ') }</div>
        )}
      </div>
    )
  }
}

export default BookEntry