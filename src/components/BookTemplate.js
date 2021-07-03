import React from 'react'
import blankCover from '../images/book-cover.png'

class BookTemplate extends React.Component {
    shelfUpdate = (e) =>
    this.props.moveBook(this.props.bookobj, e.target.value)

    render() {
        const { bookobj, books} = this.props;

        //set current shelf to none
        let currentShelf = 'none';

        // update current shelf to shelf value
        let bookItem;
        for (bookItem of books) {
            if (bookItem.id === bookobj.id) {
                currentShelf = bookItem.shelf;
                break;
            }
        }

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${bookobj.imageLinks
                                    ? bookobj.imageLinks.thumbnail
                                    : blankCover})`
                            }}></div>
                        <div className="book-shelf-changer">
                            <select
                                value={currentShelf}
                                onChange={this.shelfUpdate}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>

                    <div className="book-title">{bookobj.title}</div>
                    <div className="book-authors">{bookobj.authors}</div>
                </div>
            </li>
        )
    }

}

export default BookTemplate