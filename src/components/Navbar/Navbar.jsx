import { useCurrency } from "../../context/CurrencyContext";
import style from "./navbar.module.css";

const Navbar = () => {
	const { CURRENCY, handleChange } = useCurrency();
	return (
		<nav className={style.nav}>
			<h1>My Books</h1>
			<ul>
				<li>
					<a href="!#">Tous les livres</a>
				</li>
				<li>
					<a href="!#">Mes favoris</a>
				</li>
				<li>
					<a href="!#">Coup de coeur</a>
				</li>
			</ul>
			<select name="currency" id="currency" onChange={handleChange}>
				{Object.keys(CURRENCY).map((key) => {
					return (
						<option key={key} value={key}>
							{/* {CURRENCY[key].symbol} */}
							{key}
						</option>
					);
				})}
			</select>
		</nav>
	);
};

export default Navbar;
