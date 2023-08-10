import ourOffer from  "../../data/offers";
import Box from "../Box/Box";
import "./Services.css";



const Services = () => {
	

	return (
		<section id="our-offer" className="offer">
			<div className="container">
				<h2 className="main-second-heading">jak spełniamy Twoje marzenia?</h2>
				<div className="offer-boxes">
					{ourOffer.map((offer) => (
						<Box key={offer.id} title={offer.title} isNew={offer.isNew}></Box>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
