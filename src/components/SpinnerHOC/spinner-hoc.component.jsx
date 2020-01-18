import React from "react"
import {SpinnerWrapper, SpinnerContainer} from "./spinner-hoc.styles.jsx"
import {ThemeProvider} from "styled-components"

// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../styles/_variables.scss')
console.log(theme)


// const Spinner = WrappedComponent => ({isLoading, ...otherProps}) => (
// 	isLoading ? (
// 		<ThemeProvider theme={theme}>
// 			<SpinnerWrapper>
// 				<SpinnerContainer />
// 			</SpinnerWrapper>
// 		</ThemeProvider>
// 	) : <WrappedComponent {...otherProps} />
// )


const SpinnerHOC = (WrappedComponent) => {
	const withSpinner = (props) => {
		const {isLoading, ...otherProps} = props;
		console.log(otherProps)
		return (
			isLoading ? (
				<ThemeProvider theme={theme}>
					<SpinnerWrapper>
						<SpinnerContainer />
					</SpinnerWrapper>
				</ThemeProvider>			
			) : 
			<WrappedComponent {...otherProps} /> 
		)
	}

	return withSpinner
}



export default SpinnerHOC;