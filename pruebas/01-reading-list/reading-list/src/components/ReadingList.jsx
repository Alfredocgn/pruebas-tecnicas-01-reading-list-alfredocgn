/* eslint-disable react/prop-types */
import { BookItem } from "./BookItem"






export const ReadingList = ({readingList}) => {
  return (
    <>
    <h1>Reading List</h1>
    <ul className='booksList'>
      {readingList.map((book,index)=>(
        <li key={index}>
          <BookItem book={book}/>
        </li>
      ))}
    </ul>
    
    </>
  )
}
