import { useState } from "react";
import { useForm } from '../../hooks/useForm'
import { useDispatch } from "react-redux";
import { doLogin } from "../../actions/auth";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [formValues, handleInputChange] = useForm({
		email: '',
		password: ''
	})
	const { email, password } = formValues;
	const dispatch = useDispatch();

	const clearErrorMessageHandleInputChange = (e) => {
		setErrorMessage("")
		handleInputChange(e);
	};

	const validateForm = () => {
		if (!email.trim()) {
			setErrorMessage("Email is required");
			return false;
		}
		if (!password.trim()) {
			setErrorMessage("Password is required");
			return false;
		}
		return true;
	}

	const handleLogin = (e) => {
		e.preventDefault();

		if (validateForm()) {
			fetch(process.env.REACT_APP_API_URL + '/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email, password
				})
			})
				.then((res) => res.json())
				.then((res) => {
					if (res.status === 'success') {
						dispatch(doLogin(email, res.data.user));
						setErrorMessage('');
						return;
					}
					setErrorMessage(res.data.message);
					return;
				})
				.catch((err) => { console.log(err); });
		}
	}

	return <div className="auth__background">
		<div className="container w-25 auth__form-container" >
			<h1>Login</h1>
			<hr />{
				errorMessage && (<div className="alert alert-danger">{errorMessage}</div>)
			}
			<form onSubmit={handleLogin}>
				<input
					type="text"
					placeholder="example@example.com"
					className="form-control"
					name="email"
					value={email}
					autoComplete="off"
					onChange={clearErrorMessageHandleInputChange}
				/>

				<input
					type="password"
					name="password"
					placeholder="*******"
					className="form-control mt-3"
					value={password}
					autoComplete="off"
					onChange={clearErrorMessageHandleInputChange}
				/>
				<button className="btn btn-primary mt-3 mb-3" type="submit">
					Login
				</button>
				<div className="mb-3"> <Link to="/register">Create an account</Link></div>

			</form>

		</div>
	</div>;
};
