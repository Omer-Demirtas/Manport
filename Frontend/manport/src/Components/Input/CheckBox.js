


const CheckBox = (props) =>
{
    const {
        value,
        onChange
    } = props;
    
    return (
        <input
            style={{marginTop: '8px ', marginLeft: '1rem', height: '24px', width: '24px'}}
            className="form-check-input" 
            type="checkbox" 
            onChange={onChange} 
            checked={value}
        />
    )
}

export default CheckBox;