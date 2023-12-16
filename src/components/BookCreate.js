import { useContext, useState } from "react";
import BooksContext from "../context/books";

const BookCreate = () => {

    const {createBook} = useContext(BooksContext);

    const [title, setTitle] = useState('')
    const handleBookTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleBookCreate = (e) => {
        e.preventDefault();
        createBook(title);
        setTitle('')
    }
    return(
        <div className="relative h-[95vh]">
            <form onSubmit={handleBookCreate} className="font-mono text-2xl absolute bottom-[35vh] flex justify-center space-x-3 p-10 bg-blue-300 w-full">
                <label>Title</label>
                <input
                type="text"
                placeholder="Enter book title"
                value = {title}
                className="w-[60vh] h-[8vh] border focus:border-blue-400 focus:outline-none"
                onChange={handleBookTitle}
                />
            </form>
        </div>
    )
}

export default BookCreate;