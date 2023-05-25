/**
 * - Importé le hook qui va utiliser notre context
 * - Notre context
 */
import { useCurrency } from "../../context/CurrencyContext";
import style from "./book.module.css";

const Book = ({ titre, auteur, prix_euro, genre, annee_parution }) => {
	/**
	 * Je souhaite extraire l'info "SYMBOL" du context DeviseContext
	 */

	const { currentCurrency } = useCurrency();

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
					🖊️ {auteur} 💸{" "}
					{new Intl.NumberFormat(currentCurrency.format, {
						style: "currency",
						currency: currentCurrency.currency,
					}).format(prix_euro * currentCurrency.rate)}
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
