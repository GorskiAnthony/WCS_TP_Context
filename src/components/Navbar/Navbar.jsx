import style from "./navbar.module.css";
import { currency, useCurrency } from "../../context/CurrencyContext";

const Navbar = () => {
	const {
		value: { hChange },
	} = useCurrency();

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
				<li>
					<select name="currency" id="currency" onChange={hChange}>
						{Object.keys(currency).map((key) => (
							<option key={key} value={key}>
								{key}
							</option>
						))}
					</select>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
