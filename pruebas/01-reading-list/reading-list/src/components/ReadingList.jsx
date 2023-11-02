/* eslint-disable react/prop-types */
import { BookItem } from "./BookItem"






export const ReadingList = ({readingList,removeFromReadingList}) => {
  return (
    <>

    <ul className='booksList'>
      {readingList.map((book,index)=>(
        <li key={index}>
          <BookItem book={book} removeFromReadingList={() => removeFromReadingList(book)}/>
        </li>
      ))}
    </ul>
    
    </>
  )
}
