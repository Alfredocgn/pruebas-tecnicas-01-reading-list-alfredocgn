/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import data from '../../../books.json'
import { BookItem } from './BookItem'

const books = data.library.map(el => el.book)


export const BookList = ({setReadingList}) => {
  const [availableBooks,setAvailableBooks]=useState(books)

  const addToReadingList = (book) =>{
    setAvailableBooks((prevAvailableBooks)=>
    prevAvailableBooks.filter((availableBook)=> availableBook !== book))

    setReadingList((prevReadingList)=>[...prevReadingList,book])
  }

  return (
    <>
    <h1>Available Books</h1>
    <ul className='booksList'>
      {availableBooks.map((book,index)=>(
        <li key={index}>
          <BookItem book={book} addToReadingList={() => addToReadingList(book)}/>
        </li>
      ))}
    </ul>
    
    </>
  )
}
