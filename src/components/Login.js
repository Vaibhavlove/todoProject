import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:4000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			navigate('/todolist')
		} else {
			alert('Please check your username and password')
		}
	}
    return (
        <div className='login-app'>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input className="login-btn" type="submit" value="Login" />
			</form>
		</div>
    );
}

export default Login;