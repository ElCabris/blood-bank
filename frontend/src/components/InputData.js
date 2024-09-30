function InputData({children, type = 'text', ...rest}) {
	return (
		<>
			<label htmlFor={children}>{children}</label>
			<input {...rest} id={children} type={type}/>
		</>
	)
}

export default InputData;
