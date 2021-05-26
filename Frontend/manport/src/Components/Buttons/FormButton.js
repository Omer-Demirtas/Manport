

const FormButton = (props) =>
{
    const {
        onClick,
        children,
        color,
        variant
    } = props;

    return (
        <button
            onClick={onClick}
            type="button" 
            className={"my-3 text-" + color + " btn btn-"+variant} 
            data-bs-toggle="modal" 
            data-bs-target="#form"
        >
            {children}
        </button>   
    )
}

FormButton.defaultProps = 
{
    color: 'white',
    variant: 'success',
    children: 'default text'
}

export default FormButton;