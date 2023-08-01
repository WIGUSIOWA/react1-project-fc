// import Container from "../Container/Container";

const Header = () => {
	return (
		<header className="header-part">
			<img
				className="image"
				src="/images/westernhorses-min.jpg"
				alt="company name"
			/>
			<div className="shadow">
				<div className="container">
					<h1 className="header-main-heading">
						oferujemy najwyższej jakości usługi
					</h1>
					<p className="header-promiss">spełniamy Twoje marzenia!</p>
					<a href="#our-offer" className="cta-button">
						oferta
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
