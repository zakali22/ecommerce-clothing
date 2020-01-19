import React from "react"
// import "./custom-button.styles.scss"
import {Button} from "./custom-button.styles.jsx"
import { ThemeProvider } from "styled-components"

// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../styles/_variables.scss')
console.log(theme)

const CustomButton = ({title, type, onClickHandler}) => {
	let buttonState = type === 'third-party-button' ? 'third-party-button' : (type === 'checkout-button' ? 'checkout-button' : '');

	return (
		<ThemeProvider theme={theme}>
			<Button onClick={onClickHandler} type={type}>{title}</Button>
		</ThemeProvider>
	)
}


export default CustomButton;