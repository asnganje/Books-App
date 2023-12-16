import { useContext, useState } from "react"
import BooksContext from "../context/books"

const BookEdit = ({book, setIsOpen}) => {
    const {id, title} = book
    const {editBook} = useContext(BooksContext)

    const [newTitle, setNewTitle] = useState(title)

    const handleTitleChange = (e)=> {
        setNewTitle(e.target.value)
    }

    const handleSubmittedTitle = (e) => {
        e.preventDefault();
        editBook(id, newTitle)
        setIsOpen(false)
        setNewTitle('')
    }
    return(
        <div>
            <form onSubmit={handleSubmittedTitle}>
                <input
                value={newTitle}
                onChange={handleTitleChange}
                />
                <button>Save</button>
            </form>
        </div>
    )
}

export default BookEdit;