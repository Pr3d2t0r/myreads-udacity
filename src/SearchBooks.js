import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from "./Book";
import {Link} from "react-router-dom";

class SearchBooks extends React.Component {
    state = {
        query: "",
        books: []
    }

    search = (query) => {
        this.setState({
            query
        })
        BooksAPI.search(query.trim()).then(books => {
            this.setState({
                books
            });
        })
    }

    render() {
        const {onMoveBook} = this.props;
        const {query, books} = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Go Back</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query}
                               onChange={evt => this.search(evt.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    {books && books.length > 0 ? (
                        <ol className="books-grid">
                            {books.map(book => (
                                <Book data={book} onMove={onMoveBook}/>
                            ))}
                        </ol>
                    ) : (
                        <h4>No entries!</h4>
                    )}

                </div>
            </div>
        )
    }
}

export default SearchBooks
