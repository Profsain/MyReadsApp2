import React from 'react'
import * as BooksAPI from '../BooksAPI'

class SearchBook extends React.Component {
  //state object to hold book data
  state = {
    books: [],
    searchResult: [],
    searchError: false
  }

    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.props.showSearchPage(false)}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        );
    }
}

export default SearchBook