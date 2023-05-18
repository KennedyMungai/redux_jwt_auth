import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectCurrentToken, selectCurrentUser } from './authSlice'

const Welcome = () => {
    const user = useAppSelector(selectCurrentUser)
    const token = useAppSelector(selectCurrentToken)

    const welcome = user ? `Welcome ${user}!` : 'Welcome!'

	return <div>Welcome</div>
}

export default Welcome
