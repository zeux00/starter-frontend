import { login } from '@features/auth/authSlice';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useLocation,useNavigate } from 'react-router';

/**
 * Route protégée (vérification de la connexion de l'utilisateur)
 */
const Auth = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const { t } = useTranslation();

	useEffect(() => {
		const idToken: string | null = new URLSearchParams(location.search).get('idToken');

		//Vérification du token
		if (idToken) {
			//Mise à jour du jeton d'authentification
			dispatch(login({ authorizationToken: idToken }));

			//Navigation vers la page d'accueil
			navigate('/');
		} else
			//Redirection vers l'écran de login avec message d'erreur
			navigate('/login?error=auth_failed');
	},[dispatch,location.search,navigate]);

	//Vérification de l'authentification
	return (
		<h1>{ t('login.message') }</h1>
	);
};

export default Auth;