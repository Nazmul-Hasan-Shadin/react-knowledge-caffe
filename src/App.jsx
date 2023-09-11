
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);

  const handleAddToBookMark=blog=>{
   const newBookmarks=[...bookmarks,blog];
   setBookmarks(newBookmarks);
  }

  const handleMarkAsRead=(id,time)=>{
   setReadingTime(readingTime+time);
  //  remove the red blog from bookmark
   const remainningBookmark= bookmarks.filter(bookmark=>bookmark.id !==id)
   setBookmarks(remainningBookmark)



  }

  return (
    <>

   <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookMark={handleAddToBookMark}></Blogs>
       <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>

    </div>


    </>
  )
}

export default App
