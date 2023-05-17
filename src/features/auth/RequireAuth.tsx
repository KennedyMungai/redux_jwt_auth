import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectCurrentToken } from './authSlice'

type Props = {}

const RequireAuth = (props: Props) => {
	return <div>RequireAuth</div>
}

export default RequireAuth
