import { useState } from 'react'
import './App.css'
import { BookList } from './components/BookList'
import { ReadingList } from './components/ReadingList'

function App() {
  const [readingList, setReadingList] = useState([])
  const removeFromReadingList = (book)=>{
    setReadingList((prevReadingList)=>{
      prevReadingList.filter((readingListBook)=>readingListBook !== book)
    })
  }

  return (
    <>
      <BookList setReadingList={setReadingList}/>
      <ReadingList readingList={readingList} removeFromReadingList={removeFromReadingList} />
    </>
  )
}

export default App
