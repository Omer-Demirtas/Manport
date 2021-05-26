

const LoadingPage = (props) =>
{
    const {
        children,
        loading
    } = props;

    return (
        loading ?
            <div
                className=''
                style={{marginTop: '20%'}}>
                <div className="d-flex justify-content-center  mb-3">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <h3>Loading...</h3>
            </div>
        :
        children
    )
}

export default LoadingPage;