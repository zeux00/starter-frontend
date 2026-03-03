import { useQuery } from '@tanstack/react-query';

import api from '@api/api';
import { useAuthStore } from '@stores/useAuthStore';

export const useMe = () => {
	//Récupération de l'état d'authentification
	const isAuthenticated: boolean = useAuthStore(state => state.isAuthenticated);

	//Requête de récupération des informations de l'utilisateur
	return useQuery({
		queryKey: ['auth/me'],
		queryFn: async () => {
			//Appel de l'API pour récupérer les informations de l'utilisateur
			const { data } = await api.get('/auth/me');

			return data;
		},
		enabled: isAuthenticated
	});
};