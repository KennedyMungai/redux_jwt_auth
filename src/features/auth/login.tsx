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
    
    const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const userData = await login({ user, pwd }).unwrap()
			dispatch(setCredentials(...userData, user))
			setUser('')
			setPwd('')
			navigate('/welcome')
		} catch (err: any) {
			if (!err.response) {
				setErrMsg('No Server Response')
			} else if (err.response.status === 400) {
				setErrMsg('Missing Username or Password')
			} else if (err.response.status === 401) {
				setErrMsg('Unauthorized')
			} else {
				setErrMsg('Login Failed')
			}

			errRef.current.focus()
		}
	}

	const handleUserInput = (e) => setUser(e.target.value)
	const handlePwdInput = (e) => setPwd(e.target.value)

	return <div>Login</div>
}

export default Login
