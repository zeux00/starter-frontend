import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import './styles/main.scss';
import App from './App.tsx';
import './i18n.ts';
import { persistor,store } from './store/store.ts';

/**
 * Création de l'application React
 */
createRoot(document.getElementById('root') as Element).render(
	<StrictMode>
		<MantineProvider>
			<Notifications position="bottom-center"/>
			<Provider store={ store }>
				<PersistGate loading={ null } persistor={ persistor }>
					<BrowserRouter>
						<App/>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</MantineProvider>
	</StrictMode>
);