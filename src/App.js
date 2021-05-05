import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";

import {
	Login,
	Signup,
	ForgotPassword,
	SetPassword,
	MailSent,
} from "./pages/Authentication";

import Upload from "./pages/Upload";

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route path="/signup">
					<Signup />
				</Route>

				<Route path="/login">
					<Login />
				</Route>

				<Route path="/forgotpassword">
					<ForgotPassword />
				</Route>

				<Route path="/setpassword">
					<SetPassword />
				</Route>

				<Route path="/mailsent">
					<MailSent />
				</Route>

				<Route path="/upload">
					<Upload />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
