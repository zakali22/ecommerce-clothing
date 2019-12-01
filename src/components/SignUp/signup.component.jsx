import React from "react"
import "./signup.styles.scss"

import FormInput from "../FormInput/form-input.component.jsx"
import CustomButton from "../CustomButton/custom-button.component.jsx"

const FORM_INPUTS = [
	{
		id: 1, 
		name: 'display_name',
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
	}
	
]

class SignUp extends React.Component {
	state = {
		display_name: '',
		email: '',
		password: ''
	}

	onChangeHandler = e => {
		const {name, value} = e.target;
		this.setState({
			[name]: value
		})
	}

	onSubmitHandler = e => {
		e.preventDefault();

		this.setState({
			name: '',
			email: '',
			password: ''
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