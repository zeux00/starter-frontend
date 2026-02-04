import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useGetMeQuery } from '@services/auth/authApi';
import { logout } from '@features/auth/authSlice';
import { Button } from '@mantine/core';

const HomePage = () => {
	//Système de traductions
	const { t } = useTranslation();

	//Dispatcher Redux
	const dispatch = useDispatch();

	//Récupération des informations de l'utilisateur connecté
	const { data: user } = useGetMeQuery(null);

	return (
		<>
			<Button miw="100%" onClick={ () => dispatch(logout()) }>{ t('logout.actions.seDeconnecter') }</Button>
		</>
	);
};

export default HomePage;