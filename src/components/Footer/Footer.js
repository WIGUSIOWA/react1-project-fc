import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

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
							icon={faInstagram}
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
