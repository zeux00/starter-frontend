import { createSlice } from '@reduxjs/toolkit';

/**
 * Etat initial
 */
const initialState: { authorizationToken: string,isConnected: boolean } = {
	authorizationToken: '',
	isConnected: false
};

/**
 * Slice d'authentification
 */
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state,action) => {
			//Mise à jour de l'état lors de la connexion
			state.isConnected = true;
			state.authorizationToken = action.payload.authorizationToken;
		},
		logout: (state) => {
			//Mise à jour de l'état lors de la déconnexion
			state.isConnected = false;
			state.authorizationToken = '';
		}
	}
});

/** Export des actions **/
export const { login,logout } = authSlice.actions;

/** Export du reducer **/
export default authSlice.reducer;