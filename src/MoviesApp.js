import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'


export const MoviesApp = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppRouter />
			</PersistGate>
		</Provider>)
};
