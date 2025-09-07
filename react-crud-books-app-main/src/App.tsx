import React, { useState } from 'react'
import './App.css'

import Header from './subcomponents/Header'
import AddBook from './subcomponents/AddBook'
import BookList from './subcomponents/ListBooks'
import Footer from './subcomponents/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Book from './subcomponents/Book'
import AppRoutes from './routes/AppRoutes.tsx'

import BooksData from './Helpers/BooksData'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  let books = BooksData.getBooks();

  console.log(books);

  return (
    <Router>
      <Header />
      <AppRoutes books={books} authors={[]} />
      <Footer />
    </Router>
  )

}

export default App
