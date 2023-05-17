import { buildHooks } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { apiSlice } from '../../app/api/apiSlice'

export const AuthApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: '/auth',
				method: 'POST',
				body: { ...credentials }
			})
		})
	})
})
