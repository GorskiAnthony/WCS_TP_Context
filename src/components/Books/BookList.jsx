import Book from "./Book";
import books from "../../helpers/data.json";
import style from "./book.module.css";
const BookList = () => {
	return (
		<>
			<h1 className={style.h1}>All my books</h1>
			<div className={style.list}>
				{books.livres.map((book, index) => (
					<Book key={index} {...book} />
				))}
			</div>
		</>
	);
};

export default BookList;
