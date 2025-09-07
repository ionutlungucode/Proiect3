import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BooksData from '../Helpers/BooksData';
// import './Book.css';

let Book = () => {

    let bookId = useParams().id;
    let [book, setBook] = useState<any>(null);
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [description, setDescription] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
            
    }, []);


    let changeAuthor = () => {

    }

    let getBook = (id: string | undefined, author: string = 'all') => {

    }
 
    if (!book) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h1>Book {book?.title}</h1>

            <select onChange={changeAuthor}>
                <option value="1">Author 1</option>
                <option value="2">Author 2</option>
                <option value="3">Author 3</option>
            </select>
    
        </>
    )

}

export default Book
