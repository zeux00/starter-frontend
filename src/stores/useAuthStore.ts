import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/** Etat **/
interface AuthState {
	token: string | null;
	isAuthenticated: boolean;
}

/** Actions **/
interface AuthActions {
	login: (token: string) => void;
	logout: () => void;
}

/** Définition du typage du store **/
type AuthStore = AuthState & AuthActions;

/**
 * Création du store
 */
export const useAuthStore = create<AuthStore>()(
	persist(set => ({
		token: null,
		isAuthenticated: false,
		login: (token: string) => set({ token,isAuthenticated: true }),
		logout: () => set({ token: null, isAuthenticated: false })
	}),{
		name: 'auth-storage'
	})
);