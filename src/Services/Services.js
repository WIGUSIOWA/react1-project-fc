const Services = () => {
	const ourOffer = [
		{ id: 1, title: "nowość! mentoring szkolenia" },
		{ id: 2, title: "nauka jazdy konnej lub doskonalenie umiejętności" },
		{ id: 3, title: "tereny / rajdy" },
		{ id: 4, title: "hipoterapia" },
		{ id: 5, title: "wakacje w siodle" },
		{ id: 6, title: "wolontariat" },
	];

	return (
		<section id="our-offer" className="offer">
			<div className="container">
				<h2 className="main-second-heading">jak spełniamy Twoje marzenia?</h2>
				<div className="offer-boxes">
					{ourOffer.map((offer) => (
						<div key={offer.id}>
							<p>{offer.title}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
