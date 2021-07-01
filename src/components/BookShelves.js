import React from 'react'
import BookShelf from './BookShelf'

class BookShelves extends React.Component {
    render() {
        return (
            <div className="list-books-content">
              <BookShelf/>
            </div> 
        );
    }
}

export default BookShelves