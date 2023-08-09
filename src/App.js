import "./App.css";

import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mentors from "./components/Mentors/Mentors";
import Nav from "./components/Nav/Nav";
import Box from "./components/Box/Box";

const App = () => {
	return (
		<>
			<Nav></Nav>
			<Header></Header>
			<Mentors></Mentors>
			<Services></Services>
			<Footer></Footer>
			<Box></Box>
		</>
	);
};

export default App;
