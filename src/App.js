import "./App.css";
import Header from "./components/Header/Header";
import Mentors from "./components/Mentors/Mentors";
import Nav from "./components/Nav/Nav";

const App = () => {
	return (
		<>
			<Nav></Nav>
			<Header></Header>
			<Mentors></Mentors>
		</>
	);
};

export default App;
