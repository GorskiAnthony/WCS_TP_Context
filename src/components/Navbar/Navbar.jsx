import style from "./navbar.module.css";

const Navbar = () => {
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
			{/* <select name="currency" id="currency">
				<option value="euro">EUR</option>
				<option value="us_dollar">USD</option>
				<option value=""></option>
				<option value=""></option>
			</select> */}
		</nav>
	);
};

export default Navbar;
