import React from "react"
import SignIn from "../../components/SignIn/signin.component.jsx"
import SignUp from "../../components/SignUp/signup.component.jsx"

import "./signin-signup.styles.scss"


const SigninAndSignUpPage = () => (
	<div className="signin-page">
		<SignIn />
		<SignUp />
	</div>
)


export default SigninAndSignUpPage