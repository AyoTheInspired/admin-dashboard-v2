import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="container flex">
				<Sidebar />
				<Home />
			</div>
		</div>
	);
}

export default App;
