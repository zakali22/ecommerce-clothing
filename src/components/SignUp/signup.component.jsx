import React from "react"
import "./signup.styles.scss"

import FormInput from "../FormInput/form-input.component.jsx"
import CustomButton from "../CustomButton/custom-button.component.jsx"

import {auth, createUserOnDatabase} from "../../firebase/firebase.utils"

const FORM_INPUTS = [
	{
		id: 1, 
		name: 'displayName',
		type: 'text',
		required: true,
		label: 'Display name'
	},
	{
		id: 2,
		name: 'email',
		type: 'email',
		required: true,
		label: 'Email'
	},
	{
		id: 3,
		name: 'password',
		type: 'password',
		required: true,
		label: 'Password'
	},
	{
		id: 4,
		name: 'confirm_password',
		type: 'password',
		required: true,
		label: 'Confirm Password'
	}
	
]

class SignUp extends React.Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirm_password: ''
	}

	onChangeHandler = e => {
		const {name, value} = e.target;
		this.setState({
			[name]: value
		})
	}

	onSubmitHandler = async (e) => {
		e.preventDefault();
		const {displayName, email, password, confirm_password} = this.state;

		if(password !== confirm_password){
			alert("Passwords don't match")
		}

		const {user} = await auth.createUserWithEmailAndPassword(email, password);
		await createUserOnDatabase(user, {displayName})

		this.setState({
			displayName: '',
			email: '',
			password: '',
			confirm_password: ''
		})

	}


	render(){
		return (
			<div className="signin">
				<h2 className="signin-page__title">I don't have an account?</h2>
				<p className="signin-page__sub-title">Signup with your email and password</p>
				<form onSubmit={this.onSubmitHandler}>
					{FORM_INPUTS.map(({id, ...restOfProps}) => (
						<FormInput key={id} value={this.state[restOfProps.name]} onChangeHandler={this.onChangeHandler} {...restOfProps} />
					))}
					<CustomButton title="Signup"/>
				</form>
			</div>
		)
	}
}


export default SignUp