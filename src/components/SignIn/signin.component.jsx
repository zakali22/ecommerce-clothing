import React from "react"
import FormInput from "../FormInput/form-input.component.jsx"
import CustomButton from "../CustomButton/custom-button.component.jsx"

import "./signin.styles.scss"

class SignIn extends React.Component {
	state = {
		email: '',
		password: ''
	}


	onSubmitHandler = e => {
		e.preventDefault();
		this.setState({
			email: '',
			password: ''
		})
	}

	onChangeHandler = e => {
		const {name, value} = e.target;
		this.setState({
			[name]: value
		})
	}


	render(){
		return (
			<div className="signin">
				<h2 className="signin__title">I already have an account</h2>
				<p className="signin__sub-title">Sign in with your email and password</p>
				<form onSubmit={this.onSubmitHandler}>
					<FormInput type="email" value={this.state.email} name="email" required onChangeHandler={this.onChangeHandler} label="email"/>
					<FormInput type="password" value={this.state.password} name="password" required onChangeHandler={this.onChangeHandler} label="password"/>
					<div className="button-wrapper">
						<CustomButton title="Signin"/>
						<CustomButton title="Signin with google" type="third-party-button"/>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn