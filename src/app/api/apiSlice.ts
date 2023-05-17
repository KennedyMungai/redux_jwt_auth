import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logOut, setCredentials } from '../../features/auth/authSlice'
import { createApi } from '@reduxjs/toolkit/dist/query'

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:8000/api',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token

		if (token) {
			headers.set('authorization', `Bearer ${token}`)
		}

		return headers
	}
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)

	if (result.error && result.error.status === 403) {
		console.log('Sending refresh token...')

		// Send the refresh token to get a new access token

		const refreshResult = await baseQuery('/refresh', api, extraOptions)

		console.log(refreshResult)

		if (refreshResult?.data) {
			const user = api.getState().auth.user

			// Store the new token
			api.dispatch(setCredentials({ ...refreshResult.data, user }))

			// Retry the original query with a new access token
			result = await baseQuery(args, api, extraOptions)
		} else {
			api.dispatch(logOut())
		}
	}

	return result
}


export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({})
})