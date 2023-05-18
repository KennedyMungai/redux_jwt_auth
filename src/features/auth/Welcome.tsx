import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectCurrentToken, selectCurrentUser } from './authSlice'

const Welcome = () => {
	const user = useAppSelector(selectCurrentUser)
	const token = useAppSelector(selectCurrentToken)

	const welcome = user ? `Welcome ${user}!` : 'Welcome!'
	const tokenAbbr = `${token.slice(0, 5)}...${token.slice(-5)}`

	const content = (
		<section className='welcome'>
			<h1>{welcome}</h1>
			<p>Token: {tokenAbbr}</p>
			<p>
				<Link to='/usersList'>Go to the users list</Link>
			</p>
		</section>
	)

	return content
}

export default Welcome
