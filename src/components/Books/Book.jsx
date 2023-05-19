import style from "./book.module.css";
import { useCurrency } from "../../context/CurrencyContext";

const Book = ({ titre, auteur, prix_euro, genre, annee_parution }) => {
	const {
		value: { currentCurrency },
	} = useCurrency();
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
					🖊️ {auteur} 💸 {currentCurrency.symbol}
					{(prix_euro * currentCurrency.rate).toFixed(2)}
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
