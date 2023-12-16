import BookList from './components/BookList'
import BookCreate from './components/BookCreate'
import { useContext, useEffect } from 'react'
import BooksContext from './context/books'

const App = () => {

    const {fetchBooks} = useContext(BooksContext)
        useEffect(()=> {
            fetchBooks()
        }, [])

    return(
        <div>
            <h3>Our Books Reading List</h3>
            <BookList/>
            <BookCreate />
        </div>
    )
}

export default App;