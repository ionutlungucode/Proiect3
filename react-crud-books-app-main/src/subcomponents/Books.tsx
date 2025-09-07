import React, { useState, useEffect} from "react";
import ListBooks from "./ListBooks";
import BooksData from "../Helpers/BooksData";
// import './Books.css';

let Books = ({books}: {books: any[]}) => {

    let [booksList, setBooksList] = useState(books);



    useEffect(() => {
        console.log("Books component mounted");
    }, []);

    useEffect(() => {

    }, [books]);


    let deleteBook = (id: number) => {
        console.log(id);
        BooksData.deleteBook(id);
        setBooksList(BooksData.getBooks());
    }

    return (
        <ListBooks books={booksList} deleteBook={deleteBook} />
    )
}

export default Books;