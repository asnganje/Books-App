import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from './BookShow'
const BookList = () => {

    const {books} = useContext(BooksContext)
    const renderedBooks = books.map((book)=> {
        return (
            <BookShow key={book.id} book = {book}/>
        )
    })
    return(
        <div className = "grid grid-cols-4 space-x-5">
            {renderedBooks}
        </div>
    )
}

export default BookList;