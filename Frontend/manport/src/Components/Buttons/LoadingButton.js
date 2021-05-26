

const LoadingButton = (props) => 
{
    const {
        loading,
        onClick,
        children,
    } = props;

    return (
        <button
            onClick={onClick}
            className='btn btn-success'
        >
            {
                loading 
                ?
                    <div className="spinner-border spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>                   
                :
                    children
            }
        </button>
    )
}

export default LoadingButton;