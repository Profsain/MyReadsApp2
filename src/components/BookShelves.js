import React from 'react'
import BookShelf from './BookShelf'

const BookShelves = (props) => {
    const {books, moveBook} = props;

    //Bookshelf type array
    const shelfType = [
        {type: 'currentlyReading', title: 'Currenclty Reading'},
        {type: 'wantToRead', title: 'Want to Read'},
        {type: 'read', title: 'Read'}
    ]

    return (
        <div className="list-books-content">
            {
                shelfType.map((shelf, shelfIndex) => {
                    const allBooks = books.filter((book) => book.shelf === shelf.type);
                    return (
                        <div className='bookshelf' key={shelfIndex}>
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className='bookshelf-books'>
                                <BookShelf books={allBooks} moveBook={moveBook}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default BookShelves