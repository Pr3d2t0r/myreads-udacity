import React from 'react'
import './App.css'
import Book from "./Book";

export default function BookShelf({books, title, onMove}) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(val => (<li key={val.id}>
                        <Book data={val} onMove={onMove}/>
                    </li>))}
                </ol>
            </div>
        </div>
    )
}
