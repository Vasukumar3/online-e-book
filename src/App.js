// src/App.js
import React from 'react';


import Book from './components/Book';
import Navbar from './components/Navbar'; // Ensure this import is correct
import './App.css'; // Import a separate CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <h1>Available Books</h1>
      <div className="books-container">
        <Book title="Rich Dad Poor Dad" author="Robert Kiyosaki and Sharon Lechte" pdfUrl="URL_TO_PDF_1" />
        <Book title="The Violet and the Tom" author="Eve Ocotillo" 
        pdfUrl="URL_TO_PDF_2" />
        <Book title="The Violet and the Tom" author="Eve Ocotillo" pdfUrl="URL_TO_PDF_2" />
        <Book title="The Violet and the Tom" author="Eve Ocotillo" pdfUrl="URL_TO_PDF_2" />        
        <Book title="The Violet and the Tom" author="Eve Ocotillo" pdfUrl="URL_TO_PDF_2" />        
        <Book title="The Violet and the Tom" author="Eve Ocotillo" pdfUrl="URL_TO_PDF_2" />        
      </div>
    </div>
  );
};

export default App;
