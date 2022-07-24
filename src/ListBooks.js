import React from 'react'
import {Link} from "react-router-dom";
import './App.css'
import BookShelf from "./BookShelf";

class ListBooks extends React.Component {
    render() {
        const {books, onMove} = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Object.keys(books).map(key => {
                            if (books[key].books.length > 0)
                                return <BookShelf books={books[key].books} title={books[key].title} onMove={onMove}/>
                            return undefined;
                        })}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>Search</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListBooks
