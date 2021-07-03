import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import AddButton from './components/AddButton'
import BookShelves from './components/BookShelves'
import Header from './components/Header'
import SearchBook from './components/SearchBook'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //update showSearchPage state
  searchPageState = state => (
    this.setState({ showSearchPage: state })
  );

  //fetching data from the BookAPI using componentDidMount() lifecycle
  componentDidMount() {
    BooksAPI.getAll().then(response => this.setState({ books: response }))
  }

  //move book function handler
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      book.shelf = shelf;

      this.setState(oldState => ({
        books: oldState.books
          .filter((shelfBook) => shelfBook.id !== book.id)
          .concat(book)
      }))

    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Switch>
          
          <Route
            exact 
            path='/'
            render={() => (
              <div className="list-books">
                <Header />
                <BookShelves books={books} moveBook={this.moveBook} />
                <AddButton/>
              </div>
            )}
          />
          <Route
            path='/search'
            render={() => (
              <SearchBook books={books} moveBook={this.moveBook}/>
            )}
          />
        </Switch>
          
      </div>
    )
  }
}

export default BooksApp
