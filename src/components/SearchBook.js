import React from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookTemplate from './BookTemplate'

class SearchBook extends React.Component {

  //state object to hold book data
  state = {
    searchResult: [],
    searchError: false
  }

  //Search function handler
  searchBook = (e) => {
    const query = e.target.value
    if (query) {
      BooksAPI.search(query).then((response) => {
        response.length > 0
          ? this.setState({ searchResult: response, searchError: false })
          : this.setState({ searchResult: [], searchError: true })
      })
    } else {
      this.setState({ searchResult: [] })
    }
  }

  render() {
    const searchRes = this.state.searchResult
    const { books, moveBook } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={this.searchBook}
              type="text"
              placeholder="Search by title or author" />
          </div>
        </div>

        <div className="search-books-results">
          {searchRes.length > 0 ? (
            <div>
              <ol className="books-grid">
                {
                  searchRes.map((book) => (
                    < BookTemplate
                      key={book.id}
                      bookobj={book}
                      books={books}
                      moveBook={moveBook} />
                  ))
                }
              </ol>
            </div>
          ) : <div><h4>Search here.....</h4></div>}
        </div>
      </div>
    );
  }
}

SearchBook.propTypes = {
  moveBook: PropTypes.func.isRequired,
  bookobj: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
}

export default SearchBook