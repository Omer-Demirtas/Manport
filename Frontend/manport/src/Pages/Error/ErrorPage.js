



const ErrorPage = (props) =>
{
    const {
        message
    } = props;

    return (
        <div 
            style={{color: 'red', marginTop: '15%'}} className='text-center '>
            <h1>{message}</h1>
        </div>
    )
}

export default ErrorPage;