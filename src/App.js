import React from 'react'
import {Route, Routes} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {
    state = {
        books: {
            read: {
                books: [],
                title: "Read"
            },
            currentlyReading: {
                books: [],
                title: "Currently Reading"
            },
            wantToRead: {
                books: [],
                title: "Want to Read"
            }
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: {
                    read: {
                        books: books.filter((book) => book.shelf === "read"),
                        title: "Read"
                    },
                    currentlyReading: {
                        books: books.filter((book) => book.shelf === "currentlyReading"),
                        title: "Currently Reading"
                    },
                    wantToRead: {
                        books: books.filter((book) => book.shelf === "wantToRead"),
                        title: "Want to Read"
                    }
                }
            })
        })
    }

    moveBook = (book, whereTo) => {
        this.setState(prevState => {
            if (book.shelf)
                prevState.books[book.shelf].books = prevState.books[book.shelf].books.filter(_book => _book.id !== book.id);
            book.shelf = whereTo;
            if (whereTo !== "none")
                prevState.books[whereTo].books.push(book);
            return prevState;
        });
        BooksAPI.update(book, whereTo);
    }

    render() {
        const {books} = this.state;
        return (
            <div className="app">
                <Routes>
                    <Route path="/" element={<ListBooks books={books} onMove={this.moveBook}/>}/>
                    <Route path="search/" element={<SearchBooks onMoveBook={this.moveBook}/>}/>
                </Routes>
            </div>
        )
    }
}

export default BooksApp
