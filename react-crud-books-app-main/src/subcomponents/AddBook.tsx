import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import BooksData from '../Helpers/BooksData';
// import './AddBook.css';

let AddBook = () => {

    let navigate = useNavigate();

    let [book, setBook] = useState<any>(null);

    let [title, setTitle] = useState('');
    
    let [author, setAuthor] = useState('');

    let [description, setDescription] = useState('');


    useEffect(() => {
         
        if (book) {
            BooksData.addBook(book);
            navigate('/');
        }

    }, [book]);

    let addBook = (e: any) => {
        e.preventDefault();
        console.log(title, author, description);

        setBook({
            id: BooksData.getBooks().length + 1,
            author: author,
            title: title,
            description: description
        });

    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add Book</h2>
            <form onSubmit={addBook}>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Add Book</button>
            </form>
        </div>
    )
}

export default AddBook
