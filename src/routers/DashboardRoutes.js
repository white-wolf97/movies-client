import { Route, Switch } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { PrivateRoute } from "./PrivateRoute";
import { MoviesScreen } from '../components/movies/MoviesScreen'
import { FavoritesScreen } from '../components/favorites/FavoritesScreen'
import { InternalServerError } from "../components/error/InternalServerError";

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path="/favorites">
					<PrivateRoute>
						<FavoritesScreen />
					</PrivateRoute>
				</Route>

				<Route path="/error">
					<PrivateRoute>
						<InternalServerError />
					</PrivateRoute>
				</Route>

				<Route path="/">
					<PrivateRoute>
						<MoviesScreen />
					</PrivateRoute>
				</Route>


			</Switch>
		</>
	);
};