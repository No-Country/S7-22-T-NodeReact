const InputField = ({ label, name, type, placeholder, disabled, error, value, onChange }) => {
    // const handleChange = (e) => {
    //     onChange(e.target.value);
    // }
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name} className="font-medium text-black mb-1">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={onChange}
                className={`border ${error ? 'border-danger focus:border-danger bg-danger-bg' : 'border-border focus:border-primary' } ${disabled ? 'bg-disabled-bg-light border-grey' : ''} rounded-md px-3 py-2 text-body focus:outline-none`}
            />
            {error && <p className='text-body-sm mt-0.5 text-danger'>{error}</p>}
        </div>
    )
}

export default InputField;