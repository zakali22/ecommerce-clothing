import React from "react"
import FormInput from "../FormInput/form-input.component.jsx"
import CustomButton from "../CustomButton/custom-button.component.jsx"
import {auth, signInWithGoogle} from "../../firebase/firebase.utils"

import "./signin.styles.scss"

class SignIn extends React.Component {
	state = {
		email: '',
		password: ''
	}


	onSubmitHandler = async (e) => {
		e.preventDefault();
		const {email, password} = this.state;

		try{
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: ''
			})
		} catch(error){
			console.log(error)
		}

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
				<h2 className="signin-page__title">I already have an account</h2>
				<p className="signin-page__sub-title">Sign in with your email and password</p>
				<form onSubmit={this.onSubmitHandler}>
					<FormInput type="email" value={this.state.email} name="email" required onChangeHandler={this.onChangeHandler} label="Email"/>
					<FormInput type="password" value={this.state.password} name="password" required onChangeHandler={this.onChangeHandler} label="Password"/>
					<div className="button-wrapper">
						<CustomButton title="Signin"/>
						<CustomButton title="Signin with google" type="third-party-button" onClickHandler={signInWithGoogle}/>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn