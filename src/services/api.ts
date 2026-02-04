import { fetchBaseQuery } from '@reduxjs/toolkit/query';

/**
 * Export de la configuration de base des appels API
 */
export const baseApiQuery = fetchBaseQuery({
	baseUrl: `${import.meta.env.VITE_BACKEND_URL as string}/api`,
	prepareHeaders: (headers,{ getState }) => {
		const state: any = getState();

		//Ajout du token d'autorisation
		headers.set('Authorization',`Bearer ${state.auth.authorizationToken as string}`);

		return headers;
	}
})