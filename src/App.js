import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Services from "./Services/Services";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mentors from "./components/Mentors/Mentors";
import Nav from "./components/Nav/Nav";

const App = () => {
	return (
		<>
			<Nav></Nav>
			<Header></Header>
			<Mentors></Mentors>
			<Services></Services>
			<Footer></Footer>
			<FontAwesomeIcon icon={faTwitter} color="blue" />
			<FontAwesomeIcon icon={faFacebook} color="red" />
		</>
	);
};

export default App;
