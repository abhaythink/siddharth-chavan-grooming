import React, { useRef, useImperativeHandle, forwardRef } from "react";
import classes from "./Input.module.css";

// Wrap component with forwardRef
const Input = forwardRef((props, ref) => {
	const inputRef = useRef();

	// Expose the focus method via useImperativeHandle
	useImperativeHandle(ref, () => {
		return {
			focus: () => {
				inputRef.current.focus();
			},
		};
	});

	return (
		<div
			className={`${classes.control} ${
				props.isValid === false ? classes.invalid : ""
			}`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				ref={inputRef}
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
			/>
		</div>
	);
});

export default Input;
