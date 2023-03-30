const InputField = ({ label, name, type, placeholder, disabled, value, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name} className="font-medium text-black mb-1">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={handleChange}
                className="border border-border rounded-md px-3 py-2 text-body focus:outline-none focus:border-primary"
            />
        </div>
    )
}

export default InputField;