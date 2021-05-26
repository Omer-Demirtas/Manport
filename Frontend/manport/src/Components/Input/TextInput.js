import './index.css'



const TextInput = (props) => 
{
    const {
        disabled,
        label,
        value,
        name,
        onChange
    } = props;

    const className = 
    'input ' +
    (disabled ? ' disabled' : '')

    return (
        <input 
            type='text'
            className={className}
            disabled={disabled}
            placeholder={label}
            onChange={onChange}
            value={value}
            name={name}
        />
    )
}

TextInput.defaultProps = 
{
    disabled: false,
}

export default TextInput;