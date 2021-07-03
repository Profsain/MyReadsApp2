import React from 'react'
import PropTypes from 'prop-types'
import BookTemplate from './BookTemplate'

class BookShelf extends React.Component {
    render() {
        const { books, moveBook } = this.props
        return (

            <div>
                <ol className="books-grid">
                    {
                        books.map((book) => (

                            <BookTemplate 
                            key={book.id} 
                            books={books}
                            bookobj={book} 
                            moveBook={moveBook} />

                        ))
                    }
                </ol>
            </div>
        );
    }
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    bookobj: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default BookShelf