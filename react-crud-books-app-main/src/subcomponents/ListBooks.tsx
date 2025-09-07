import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let ListBooks = ({books, deleteBook}) => {


    // If no books are available, display a message
    if (books.length == 0) {
        return (
            <div className="container mt-4">
                <h2 className="mb-4">No Books Available</h2>
            </div>
        );
    }

    // If books are available, display them
    return (
        <> 
            <div className="container mt-4">
                <h2 className="mb-4">Book List</h2>

                <div className="row">
                    {books.map((book, index) => (
                        <div key={book.id} className="col-md-4 mb-3">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{book.title} - {book.id} </h5>
                                    <p className="card-text text-muted">by {book.author}</p>
                                    <Button variant="danger" className="mt-2" onClick={() => deleteBook(book.id)}>Delete Book</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Link to="/add-book">Add Book</Link>
            </div>
        </>
    )
}

export default ListBooks;
