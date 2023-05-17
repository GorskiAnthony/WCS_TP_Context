import style from "./book.module.css";

const Book = ({ titre, auteur, prix_euro, genre, annee_parution }) => {
	return (
		<div className={style.book}>
			<h3>{titre}</h3>
			<img
				src="https://placehold.co/230x200"
				alt="placeholder image"
				className={style.img}
			/>
			<div>
				<p>
					🖊️ {auteur} 💸 {prix_euro}
				</p>
			</div>
			<div>
				<p>
					📚 {genre} 📅 {annee_parution}
				</p>
			</div>
			<div>
				<button className={style.btn}>❤️</button>
				<button className={style.btn}>⭐</button>
			</div>
		</div>
	);
};

export default Book;
