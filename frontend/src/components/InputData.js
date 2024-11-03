function InputData({ type = "text", placeholder, children, className }) {
	return (
		<div className={`form-group ${className}`}>
			<label>{children}</label>
			<input type={type} placeholder={placeholder} className={className} />
		</div>
	);
}

export default InputData;