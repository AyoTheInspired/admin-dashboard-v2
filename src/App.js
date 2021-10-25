import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import SingleUser from "./pages/SingleUser";
import CreateUser from "./pages/CreateUser";

function App() {
	return (
		<Router>
			<Header />
			<div className="container flex">
				<Sidebar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/users" exact component={UserList} />
					<Route path="/users/:userId" exact component={SingleUser} />
					<Route path="/createUser" exact component={CreateUser} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
