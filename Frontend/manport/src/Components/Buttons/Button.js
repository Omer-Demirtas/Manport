

const Button = (props) =>
{
    const {
        variant,
        onClick,
        color,
        children,
    } = props;
    
    return (
        <button
            onClick={onClick}
            style={{height: 'fit-content'}}
            className={'btn btn-' + variant + ' text-'+color}
        >
            {children}
        </button>
    )
}

Button.defaultProps = 
{
    variant: 'success',
    color: 'white'
}

export default Button;