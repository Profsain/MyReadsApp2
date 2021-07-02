import React from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBook extends React.Component {
  //state object to hold book data
  state = {
    books: [],
    searchResult: [],
    searchError: false
  }
  //Search function handler
  searchBook = (e) => {
    const query = e.target.value
    if (query) {
      BooksAPI.search(query).then((response) => {
        if (!response) {
          this.setState({ searchResult: [], searchError: true })
        } else {
          this.setState({ searchResult: response, searchError: false })
          this.addBook()
        }
      })
    } else {
      this.setState({ searchResult: [] })
    }
  }

  //Add book to shelf handler
  addBook = () => {
    const books = this.state.books
    const searchResult = this.state.searchResult
    if (searchResult.length > 0) {
      books.forEach((book) => {
        searchResult.forEach((resultBook) => {
          if (resultBook.id === book.id) {
            resultBook.shelf = book.shelf
          }
        })
      })
    }
    this.setState({ searchResult: searchResult })
    console.log("Search Result", searchResult)
  }

  render() {
    const searchRes = this.state.searchResult
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
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${book.imageLinks.thumbnail})`
                            }}></div>
                          <div className="book-shelf-changer">
                            <select
                              value={book.shelf}
                              onChange={e => this.props.moveBook(book, e.target.value)}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>

                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                    </li>
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
SearchBook.PropTypes = {
  moveBook: PropTypes.func.isRequired
}

export default SearchBook