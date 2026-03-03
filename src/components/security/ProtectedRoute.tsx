import { Navigate,Outlet } from 'react-router';

import { useAuthStore } from '@stores/useAuthStore';

/**
 * Route protégée (vérification de la connexion de l'utilisateur)
 */
const ProtectedRoute = () => {
	//Vérification de l'authentification
	const isAuthenticated: boolean = useAuthStore(state => state.isAuthenticated);

	//Vérification de l'authentification
	return isAuthenticated ? <Outlet/> : <Navigate to="/login" replace/>;
};

export default ProtectedRoute;