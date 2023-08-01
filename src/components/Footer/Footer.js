import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="footer-part">
			<div className="container">
				<p className="footer-paragraph">
					best horses ever company - wszelkie prawa zastrzeżone 2023
				</p>
				<ul className="footer-list">
					<li>
						<FontAwesomeIcon
							icon={faTwitter}
							color="white
						"
						/>
					</li>
					<li>
						<FontAwesomeIcon icon={faFacebook} color="white" />
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
