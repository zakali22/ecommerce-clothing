import React from "react"

import "./form-input.styles.scss"

const FormInput = ({label, onChangeHandler, ...restOfProps}) => (
	<div className="form-group">
		<input className="form-group__input" {...restOfProps} onChange={onChangeHandler}/>
		<label className={`${restOfProps.value.length ? 'shrinkState' : ''} form-group__label`}>{label}</label>
	</div>
)

export default FormInput