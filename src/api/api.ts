import axios from 'axios';

import { useAuthStore } from '@stores/useAuthStore';

/** Création de l'API principale **/
const api = axios.create({
	baseURL: `${import.meta.env.VITE_BACKEND_URL as string}/api`
});

/**
 * Interception de requêtes (injection du token JWT à chaque appel)
 */
api.interceptors.request.use(config => {
	//Récupération du token JWT (hors hook)
	const token: string | null = useAuthStore.getState().token;

	//Vérification du token
	if (token?.length)
		//Ajout de l'autorisation
		config.headers.Authorization = `Bearer ${token}`;

	//Retour de la configuration
	return config;
});

/**
 * Interception des réponses
 */
api.interceptors.response.use(response => response,error => {
	//Vérification du statut de la réponse
	if (error.response?.status === 401)
		//Déconnexion de l'utilisateur
		useAuthStore.getState().logout();

	//Rejet avec l'erreur
	return Promise.reject(error);
});

export default api;