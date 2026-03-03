import { useTranslation } from 'react-i18next';
import { Button,Loader } from '@mantine/core';

import { useMe } from '@api/authApi';
import { useAuthStore } from '@stores/useAuthStore';

const HomePage = () => {
	//Système de traductions
	const { t } = useTranslation();

	//Déconnexion de l'utilisateur
	const logout = useAuthStore(state => state.logout);

	//Récupération des informations de l'utilisateur connecté
	const { data: user,isLoading,error } = useMe();

	//Vérification du chargement
	if (isLoading) return <Loader/>;

	return (
		<>
			<Button miw="100%" onClick={ () => logout() }>{ t('logout.actions.seDeconnecter',{ user: user?.user?.name }) }</Button>
		</>
	);
};

export default HomePage;