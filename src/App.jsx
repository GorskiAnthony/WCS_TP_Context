import Navbar from "./components/Navbar/Navbar";
import BookList from "./components/Books/BookList";
import style from "./app.module.css";

const App = () => {
	return (
		<div>
			<Navbar />
			<div className={style.container}>
				<BookList />
			</div>
		</div>
	);
};

export default App;
