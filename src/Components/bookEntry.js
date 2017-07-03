//Librar(y|ies)
import React from 'react'
import PropTypes from 'prop-types'

const BookEntry = (props) => {
  return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select onChange={(e) => props.onShelfChange(props.book, e.target.value)} value={props.book.shelf}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{ props.book.title }</div>
      {typeof props.book.authors !== 'undefined' && (
        <div className="book-authors">{ props.book.authors.join(', ') }</div>
      )}
    </div>
  )
}

BookEntry.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookEntry
