import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
	name: 'Auth',
	initialState: { user: null, token: null },
	reducers: {
		setCredentials: (state, action: PayloadAction<any>) => {
			const { user, accessToken } = action.payload
			state.user = user
			state.token = accessToken
		},
		logOut: (state) => {
			state.user = null
			state.token = null
		}
	}
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentToken = (state: any) => state.auth.token
