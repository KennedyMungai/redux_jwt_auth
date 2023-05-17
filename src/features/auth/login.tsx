import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'




const Login = () => {
    const userRef = useRef()
	const errRef = useRef()
	const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
	const [first, setFirst] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const navigate = useNavigate()

	const [login, { isLoading }] = useLoginMutation()
	const dispatch = useDispatch()

	useEffect(() => {
		userRef.current.focus()
	}, [])

	useEffect(() => {
		setErrMsg('')
	}, [user, pwd])
    

	return <div>Login</div>
}

export default Login
