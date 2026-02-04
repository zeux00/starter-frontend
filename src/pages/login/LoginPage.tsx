import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Box,Button,Divider,Fieldset,Flex,Grid,TextInput } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';

import { loginWithGoogle,loginWithPassword } from '@services/auth/authService';

const LoginPage = () => {
	//Système de traductions
	const { t } = useTranslation();

	//Présence d'erreurs
	const [hasAuthError,setHasAuthError] = useState(new URLSearchParams(location.search).get('error') == 'auth_failed');

	//Données du formulaire
	const [email,setEmail] = useState(new URLSearchParams(location.search).get('loginHint') ?? '');
	const [password,setPassword] = useState('');

	return (
		<>
			<Grid gutter={ 0 }>
				<Grid.Col span={ 6 } bg="red" mih="100vh">

				</Grid.Col>
				<Grid.Col span={ 6 }>
					<Flex justify="center" align="center" mih="100vh">
						<Box miw={ 500 }>
							<h1>{ t('welcome.message') }</h1>
							<Button leftSection={ <IconBrandGoogle size={ 14 } /> } miw="100%" onClick={ () => loginWithGoogle() } variant="light">{ t('login.actions.seConnecterGoogle') }</Button>
							<Divider label={ t('login.orSection').toUpperCase() } my="lg"/>

							<Alert variant="light" color="red" title={ t('login.errors.authFailed.title') } mb="md" hidden={ !hasAuthError }>{ t('login.errors.authFailed.message') }</Alert>

							<Fieldset legend={ t('login.authentificationPassword') } variant="filled">
								<TextInput label={ t('login.email.item') } placeholder={ t('login.email.placeholder') } mb="md" mt="md" value={ email } onChange={ e => setEmail(e.currentTarget.value) }/>
								<TextInput label={ t('login.password.item') } type="password" placeholder={ t('login.password.placeholder') } mb="md" mt="md" value={ password } onChange={ e => setPassword(e.currentTarget.value) }/>
								<Flex justify="space-between" align="center" gap="md">
									<a href="#">{ t('login.passwordOublie.link') }</a>
									<Button onClick={ () => loginWithPassword(email,password) } disabled={ !email || !password }>{ t('login.actions.seConnecter') }</Button>
								</Flex>
							</Fieldset>
						</Box>
					</Flex>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default LoginPage;