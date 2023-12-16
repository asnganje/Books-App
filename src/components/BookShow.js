import { IoCloseSharp } from "react-icons/io5"
import { IoPencilOutline } from "react-icons/io5";
import BooksContext from "../context/books"
import BookEdit from './BookEdit'
import { useContext, useState } from "react"

const BookShow = ({book}) => {
    const [isOpen, setIsOpen] = useState(false)
    const {deleteBook} = useContext(BooksContext)
    const handleRemove = (id) => {
        deleteBook(id)
    }

    const handlePencilClick = ()=> {
        setIsOpen(!isOpen)
    }

    let content = <div>
                        {book.title}
                        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book"/>
                    </div>
    if(isOpen) {
        content = <BookEdit book = {book} setIsOpen = {setIsOpen}/>
    }

    return(
        <div className="relative">
                <div className="absolute top-0 right-5">
                    <button onClick={handlePencilClick}><IoPencilOutline/></button>
                    <button onClick={() => handleRemove(book.id)}><IoCloseSharp /> </button>
                </div>
                {content}
        </div>
    )
}

export default BookShow;