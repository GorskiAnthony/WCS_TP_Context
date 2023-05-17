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
		</nav>
	);
};

export default Navbar;
