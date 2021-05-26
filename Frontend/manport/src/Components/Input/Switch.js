



const Switch = (props) =>
{
    const {
        checked,
        onChange
    } = props;

    return (
        <div className="form-check form-switch d-flex align-items-center ">
            <input
                checked={checked}
                onChange={onChange}
                style={{color: 'green',height: '25px', width: '45px'}}
                className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        </div>
    )
}

export default Switch;