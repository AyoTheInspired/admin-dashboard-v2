import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList";

function App() {
	return (
		<Router>
			<Header />
			<div className="container flex">
				<Sidebar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/users" exact component={UserList} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
