import React from 'react'
import { Link } from 'react-router-dom'

let Header = () => {

    return (
        <header className="p-3 bg-light">
            <Link to="/" className="btn btn-primary me-2">
                List All Books
            </Link>
            <Link to="/add-book" className="btn btn-secondary">
                Add Book
            </Link>
        </header>
    )
}

export default Header
