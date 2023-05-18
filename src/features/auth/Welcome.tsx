import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectCurrentToken, selectCurrentUser } from './authSlice'

const Welcome = () => {
    const user = useAppSelector(selectCurrentUser)

	return <div>Welcome</div>
}

export default Welcome
