import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({title, type, onClickHandler}) => {
	let buttonState = type === 'third-party-button' ? 'third-party-button' : (type === 'checkout-button' ? 'checkout-button' : '');

	return (
		<button className={`${buttonState} custom-button`}  onClick={onClickHandler}>{title}</button>
	)
}


export default CustomButton;