import Button from "../../Components/Buttons/Button";

const ApllicationManagementHeader = (props) =>
{
    const {
        handleAddPage,
    } = props;

    return (
        <div className='header'>
            <h1>Application Management</h1>
            <Button
                onClick={handleAddPage}
            >
                add new application
            </Button>
        </div>
    )
}

export default ApllicationManagementHeader;