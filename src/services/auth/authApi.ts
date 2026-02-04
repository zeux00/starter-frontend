import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApiQuery } from '@services/api';

/**
 * API d'authentification
 */
export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: baseApiQuery,
	endpoints: (builder) => ({
		getMe: builder.query<any,any>({
			query: () => '/auth/me'
		})
	})
});

/** Export des hooks **/
export const { useGetMeQuery } = authApi;