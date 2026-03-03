import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

import './styles/main.scss';
import App from './App.tsx';
import './i18n.ts';

/**
 * Création du client HTTP
 */
const queryClient: QueryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false
		}
	}
});

/**
 * Création de l'application React
 */
createRoot(document.getElementById('root') as Element).render(
	<StrictMode>
		<MantineProvider>
			<QueryClientProvider client={ queryClient }>
				<Notifications position="bottom-center"/>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</QueryClientProvider>
		</MantineProvider>
	</StrictMode>
);