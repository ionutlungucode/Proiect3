import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "../subcomponents/Book";
import AddBook from "../subcomponents/AddBook";
import Books from "../subcomponents/Books.tsx";


let AppRoutes = ({books, authors}: {books: any[], authors: any[]}) => {

    return (
        <Routes>
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/" element={<Books books={books} />} />
        </Routes>
    )

}

export default AppRoutes;