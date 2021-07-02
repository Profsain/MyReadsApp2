import React from 'react'
import * as BooksAPI from './BooksAPI'
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
    showSearchPage: false,
    books: []
  }

  //update showSearchPage state
  searchPageState = state => (
    this.setState({ showSearchPage: state })
  );

  //fetching data from the BookAPI using componentDidMount() lifecycle
  componentDidMount() {
    BooksAPI.getAll().then(response => this.setState({books: response}))
  }

  //move book function handler
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      book.shelf = shelf;

      this.setState(oldState => ({
        books: oldState.books
        .filter((shelfBook) => shelfBook.id !== book.id )
        .concat(book)
      }))

      // let newBooks = this.state.filter((shelfBook) => shelfBook.id !== book.id) 
      // newBooks.push(book)

      // this.setState({books:newBooks})
      
    })
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook showSearchPage={this.searchPageState} />
        ) : (
          <div className="list-books">
            <Header />
            <BookShelves books={books} moveBook={this.moveBook} />
            <AddButton showSearchPage={this.searchPageState} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
