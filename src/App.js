import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import AddButton from './components/AddButton'
import BookShelves from './components/BookShelves'
import Header from './components/Header'
import SearchBook from './components/SearchBook'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  //update showSearchPage state
  searchPageState = state => (
    this.setState({showSearchPage: state})
  );

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook showSearchPage={this.searchPageState}/>
        ) : (
          <div className="list-books">
            <Header/>
            <BookShelves/>
            <AddButton showSearchPage={this.searchPageState}/>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
