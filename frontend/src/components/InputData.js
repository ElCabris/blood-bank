function InputData({children, type = 'text', ...rest}) {
	return (
		<div>
			<label htmlFor={children}>{children}</label>
			<input {...rest} id={children} type={type}/>
		</div>
	)
}

export default InputData;
