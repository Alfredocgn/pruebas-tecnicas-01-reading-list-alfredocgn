/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BookItem } from './BookItem'




export const BookList = ({availableBooks,addToReadingList}) => {

  return (
    <>
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
