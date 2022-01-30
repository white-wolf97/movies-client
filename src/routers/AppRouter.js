import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { PublicRoute } from "./PublicRoute";
import { LoginScreen } from "../components/login/LoginScreen";
import { FavoritesScreen } from "../components/favorites/FavoritesScreen";
import { MoviesScreen } from "../components/movies/MoviesScreen";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />

				<Switch>

					<Route path="/login">
						<PublicRoute>
							<LoginScreen />
						</PublicRoute>
					</Route>

					<Route path="/favorites">
						<PrivateRoute>
							<FavoritesScreen />
						</PrivateRoute>
					</Route>

					<Route path="/">
						<PrivateRoute>
							<MoviesScreen />
						</PrivateRoute>
					</Route>
				</Switch>
			</div>
		</Router>
	)
};
