import { useSelector } from 'react-redux';
import { Navigate,Outlet } from 'react-router';

/**
 * Vérification de l'authentification de l'utilisateur
 */
const useAuthenticated = (): boolean => {
	const isConnected = useSelector((state: any) => state.auth.isConnected as boolean);

	//Vérification de l'authentification de l'utilisateur
	return isConnected;
}

/**
 * Route protégée (vérification de la connexion de l'utilisateur)
 */
const ProtectedRoute = () => {
	//Vérification de l'authentification
	const isAuthenticated: boolean = useAuthenticated();

	//Vérification de l'authentification
	return isAuthenticated ? <Outlet/> : <Navigate to="/login" replace/>;
};

export default ProtectedRoute;