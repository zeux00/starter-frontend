import { initializeApp,type FirebaseApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup,type UserCredential } from 'firebase/auth';

/**
 * Définition de la configuration de Firebase
 */
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

/** Création de l'application Firebase **/
const app: FirebaseApp = initializeApp(firebaseConfig);

/** Création de l'authentification Firebase **/
const auth = getAuth(app);

/**
 * Connexion avec Google
 */
export const loginWithGoogle = async () => {
	const provider: GoogleAuthProvider = new GoogleAuthProvider();
	let result: UserCredential;
	let idToken: string;

	try {
		//Affichage de la popup de connexion Google
		result = await signInWithPopup(auth,provider);

		//Récupération du jeton d'authentification
		idToken = await result.user.getIdToken();

		//Navigation vers la page d'authentification
		window.location.href = `/auth?idToken=${idToken}`;
	} catch (error: any) {
		//Navigation vers la page de login avec le message d'erreur
		window.location.href = `/login?error=auth_failed`;
	}
};

/**
 * Connexion avec e-mail/mot de passe
 */
export const loginWithPassword = async (email: string,password: string) => {
	let result: UserCredential;
	let idToken: string;

	try {
		//Authentification par e-mail/mot de passe
		result = await signInWithEmailAndPassword(auth,email,password);

		//Récupération du jeton d'authentification
		idToken = await result.user.getIdToken();

		//Navigation vers la page d'authentification
		window.location.href = `/auth?idToken=${idToken}`;
	} catch (error: any) {
		//Navigation vers la page de login avec le message d'erreur
		window.location.href = `/login?error=auth_failed&loginHint=${encodeURIComponent(email)}`;
	}
};