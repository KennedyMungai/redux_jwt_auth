import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import RequireAuth from './features/auth/RequireAuth'
import Welcome from './features/auth/Welcome'
import Login from './features/auth/login'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{/* Public Routes */}
				<Route index element={<Public />} />
				<Route path='/login' element={<Login />} />

				{/* Protected Routes */}
				<Route element={<RequireAuth />}>
					<Route path='/welcome' element={<Welcome />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default App
