import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { PublicRoute } from "./PublicRoute";
import { LoginScreen } from "../components/auth/LoginScreen";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardRoutes } from './DashboardRoutes';
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>

					<Route path="/login">
						<PublicRoute>
							<LoginScreen />
						</PublicRoute>
					</Route>

					<Route path="/register">
						<PublicRoute>
							<RegisterScreen />
						</PublicRoute>
					</Route>

					<Route path="/*">
						<PrivateRoute>
							<DashboardRoutes />
						</PrivateRoute>
					</Route>

				</Switch>
			</div>
		</Router>
	)
};
