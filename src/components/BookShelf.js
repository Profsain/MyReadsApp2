import React from 'react'
import PropTypes from 'prop-types'

class BookShelf extends React.Component {
    render() {
        const { books, moveBook } = this.props
        console.log("Inside BookShelf", books)
        return (

            <div>
                {/* bookshelf component */}
                <ol className="books-grid">
                    {
                        books.map((book) => (
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
                                                onChange={e => moveBook(book, e.target.value)}>
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
        );
    }
}

BookShelf.PropTypes = {
    books: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default BookShelf