//Librar(y|ies)
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SearchBar = (props) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        >Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => props.onQuery(e.target.value)}
            value={props.query}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  onQuery: PropTypes.func.isRequired
}

export default SearchBar
