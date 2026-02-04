import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationFR from './locales/fr.json';

/**
 * Configuration du système de traduction i18n
 */
i18n
	.use(initReactI18next)
	.init({
		resources: {
			fr: {
				translation: translationFR
			}
		},
		lng: 'fr',
		fallbackLng: 'fr',
		interpolation: {
			escapeValue: true
		}
	});

//Export du module i18n configuré
export default i18n;