import "./Nav.css";

const Nav = () => {
	return (
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
