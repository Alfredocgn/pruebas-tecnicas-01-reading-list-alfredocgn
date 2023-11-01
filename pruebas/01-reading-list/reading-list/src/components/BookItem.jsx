/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export const BookItem = ({book, addToReadingList,removeFromReadingList}) => {
  return (
    <>
    <img className="cover" src={book.cover} alt="book cover" />
    <h3>{book.title}</h3>
    <p>Autor: {book.author.name}</p>
    <p>Genero: {book.genre}</p>
    {addToReadingList && (<button onClick={()=> addToReadingList(book)}>Add to Read List</button>)}
    {removeFromReadingList ? (<button onClick={()=> removeFromReadingList(book)}>Remove from Reading list</button>):null}
    
    </>
  )
}
