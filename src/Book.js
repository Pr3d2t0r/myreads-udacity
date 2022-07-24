import React from 'react'
import './App.css'

function Book({data, onMove}) {
    console.log(data)
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${data.imageLinks.smallThumbnail}")`
                }}></div>
                <div className="book-shelf-changer">
                    <select onChange={(evt => evt.target.value !== "move" ? onMove(data, evt.target.value) : false)}>
                        <option value="move">Move to...</option>
                        {data.shelf !== "read" && (
                            <option value="read">Read</option>
                        )}
                        {data.shelf !== "currentlyReading" && (
                            <option value="currentlyReading">Currently Reading</option>
                        )}
                        {data.shelf !== "wantToRead" && (
                            <option value="wantToRead">Want to Read</option>
                        )}
                        {data.shelf && data.shelf !== "none" && (
                            <option value="none">None</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="book-title">{data.title}</div>
            <div className="book-authors">{data.authors ? data.authors.join(', '): ""}</div>
        </div>
    )

}

export default Book;
