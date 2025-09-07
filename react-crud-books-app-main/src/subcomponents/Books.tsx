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

    let sortBooks = () => {
        const sorted = [...booksList].sort((a, b) => a.title.localeCompare(b.title));
        setBooksList(sorted);
    }

    return (
        <ListBooks books={booksList} deleteBook={deleteBook} sortBooks={sortBooks} />
    )
}

export default Books;