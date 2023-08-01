import styles from "./Nav.module.css";
import Container from "../Container/Container";
const Nav = () => {
	return (
		<nav className={styles.container}>
			<Container>
				<p className={styles.brand}>best horses ever company</p>
				<ul className={styles.listItems}>
					<li>
						<a className={styles.goButton}>o nas</a>
					</li>
					<li>oferta</li>
					<li>kontakt</li>
				</ul>
			</Container>
		</nav>
	);
};
export default Nav;
