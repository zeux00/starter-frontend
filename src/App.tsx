import { Route,Routes } from 'react-router';

import ProtectedRoute from './components/security/ProtectedRoute.tsx';
import Auth from './components/security/Auth.tsx';
import LoginPage from './pages/login/LoginPage.tsx';
import ErrorPage from './pages/error/ErrorPage.tsx';
import HomePage from './pages/home/HomePage.tsx';


const App = () => {
	return (
		<Routes>
			<Route path="/login" element={ <LoginPage/> }></Route>
			<Route path="/auth" element={ <Auth/> }></Route>

			<Route element={ <ProtectedRoute/> }>
				<Route path="/" element={ <HomePage/> }></Route>
			</Route>

			<Route path="*" element={ <ErrorPage/> }></Route>
		</Routes>
	)
}

export default App;