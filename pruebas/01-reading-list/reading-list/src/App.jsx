import {  useState } from 'react'
import './App.css'
import { BookList } from './components/BookList'
import { ReadingList } from './components/ReadingList'
import data from '../../books.json'
import { GenreList } from './components/GenreList'


const books = data.library.map(el => el.book)
const genres = [... new Set(books.map((book)=>book.genre))]

function App() {
  const [availableBooks,setAvailableBooks]=useState(books)
  const [readingList, setReadingList] = useState([])
  const [selectedGenre,setSelectedGenre]=useState(null)

  const addToReadingList = (book) =>{
    setAvailableBooks((prevAvailableBooks)=>
    prevAvailableBooks.filter((availableBook)=> availableBook !== book))

    setReadingList((prevReadingList)=>[...prevReadingList,book])
  }
  const removeFromReadingList = (book)=>{
    setReadingList((prevReadingList)=>
      prevReadingList.filter((readingListBook)=>readingListBook !== book)
    )
    setAvailableBooks((prevAvailableBooks)=>[...prevAvailableBooks,book])
  }

  const filteredBooks = selectedGenre 
  ? availableBooks.filter((book)=> book.genre === selectedGenre)
  :availableBooks;


  return (
    <>
      <h1>Available Books</h1>
      <p>Libros Disponibles: {availableBooks.length}</p>
      <p>Libros en lista de Lectura: {readingList.length}</p>
      <p>Libros disponibles segun genero seleccionado: {filteredBooks.length}</p>
      <GenreList genres={genres} setSelectedGenre={setSelectedGenre}/>
      <BookList availableBooks={filteredBooks} addToReadingList={addToReadingList}/>
      <h1>Reading List</h1>
      <ReadingList readingList={readingList} removeFromReadingList={removeFromReadingList} />
    </>
  )
}

export default App
