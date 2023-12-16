import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext()

const Provider = ({children}) => {

    const [books, setBooks] = useState([])
    const fetchBooks = async () => {
        try{
            const url = "http://localhost:3001/books"
            const res = await axios.get(url)
            setBooks(res.data);
        }
        catch(error) {
            throw new Error("Invalid request content")
        }
    }

    const createBook = async (newTitle) => {
        try {
            const url = "http://localhost:3001/books"
            const res = await axios.post(url, {title: newTitle})
            const updatedBooks = [...books, res.data]
            setBooks(updatedBooks)
        } catch (error) {
            throw new Error("Invalid api request")
        }
    }

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter((book)=> book.id !== id)
        setBooks(updatedBooks)
    }

    const editBook = async (id, newTitle) => {
        try {
            const res = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle})
            const updatedBooks = books.map((book)=> {
                if(book.id === id) {
                    return book = res.data
                }
                return book;
            })
            setBooks(updatedBooks)
        } catch (error) {
            throw new Error("Invalid request content")
        }
    }

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        deleteBook,
        editBook
    }
    return(
        <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>
    )
}

export {Provider};
export default BooksContext;