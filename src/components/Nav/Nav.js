import styles from "./Nav.module.css";
import Container from "../Container/Container";
const Nav = () => {
	return (
		// <nav className={styles.container}>
		// 	<Container>
		// 		<p className={styles.brand}>best horses ever company</p>
		// 		<ul className={styles.listItems}>
		// 			<li>
		// 				<a className={styles.goButton}>o nas</a>
		// 			</li>
		// 			<li>oferta</li>
		// 			<li>kontakt</li>
		// 		</ul>
		// 	</Container>
		// </nav>

		<nav className="navigation">
			<div className="container">
				<p className="brand">best horses ever company</p>
				<ul className="list-items">
					<li>
						<a className="go-button" href="#dream-team">
							o nas
						</a>
					</li>
					<li>
						<a className="go-button" href="#our-offer">
							oferta
						</a>
					</li>
					<li className="disabled-button">kontakt</li>
				</ul>
			</div>
		</nav>
	);
};
export default Nav;
