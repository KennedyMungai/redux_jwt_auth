import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectCurrentToken } from './authSlice'

const RequireAuth = () => {
	const token = useSelector(selectCurrentToken)

	return <div>RequireAuth</div>
}

export default RequireAuth
