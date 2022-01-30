import { useState } from "react";
import { useForm } from '../../hooks/useForm';
import { useDispatch } from "react-redux";
import { doLogin } from "../../actions/auth";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {

	const [errorMessage, setErrorMessage] = useState('');
	const [formValues, handleInputChange] = useForm({
		email: '',
		firstName: '',
		lastName: '',
		password: '',
		password2: ''
	})
	const { email, password, firstName, lastName, password2 } = formValues;
	const dispatch = useDispatch();

	const clearErrorMessageHandleInputChange = (e) => {
		setErrorMessage("")
		handleInputChange(e);
	};

	const validateForm = () => {
		if (!firstName.trim()) {
			setErrorMessage("Firstname is required");
			return false;
		}
		if (!lastName.trim()) {
			setErrorMessage("Lastname is required");
			return false;
		}
		if (!email.trim()) {
			setErrorMessage("Email is required");
			return false;
		}
		if (!password.trim()) {
			setErrorMessage("Password is required");
			return false;
		}
		if (!password2.trim()) {
			setErrorMessage("Repeat your password");
			return false;
		}
		if (password !== password2) {
			setErrorMessage("Passwords must match");
			return false;
		}
		return true;
	}

	const handleRegister = (e) => {
		e.preventDefault();

		if (validateForm()) {
			fetch(process.env.REACT_APP_API_URL + '/users/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email, firstName, lastName, password
				})
			})
				.then((res) => res.json())
				.then((res) => {
					if (res.status === 'success') {
						dispatch(doLogin(email, firstName + ' ' + lastName));
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
			<h1>Register</h1>
			<hr />{
				errorMessage && (<div className="alert alert-danger">{errorMessage}</div>)
			}
			<form onSubmit={handleRegister}>


				<input
					type="text"
					placeholder="Firstname"
					className="form-control"
					name="firstName"
					value={firstName}
					autoComplete="off"
					onChange={clearErrorMessageHandleInputChange}
				/>

				<input
					type="text"
					placeholder="Lastname"
					className="form-control mt-3"
					name="lastName"
					value={lastName}
					autoComplete="off"
					onChange={clearErrorMessageHandleInputChange}
				/>
				<input
					type="text"
					placeholder="example@example.com"
					className="form-control mt-3"
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
					onChange={clearErrorMessageHandleInputChange}
				/>
				<input
					type="password"
					name="password2"
					placeholder="*******"
					className="form-control mt-3"
					value={password2}
					onChange={clearErrorMessageHandleInputChange}
				/>
				<button className="btn btn-primary mt-3 mb-3" type="submit">
					Register
				</button>
				<div className="mb-3"> <Link to="/login">Already have an account</Link></div>

			</form>

		</div>
	</div>;
};
