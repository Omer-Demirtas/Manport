


const Select = (props) => 
{
    const {
        value,
        onChange,
        options
    } = props;

    return (
        <select 
            value={value}
            onChange={onChange}
            className='input' required
        >
            {
                options.map((o, index) => (
                    <option 
                        key={index}
                        value={index}
                    >
                        {o}
                    </option>
                ))
            }
        </select>
    )
}

Select.defaultProps = 
{
    options:['default option'],
}

export default Select;