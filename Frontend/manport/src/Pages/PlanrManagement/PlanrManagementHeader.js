import FormButton from "../../Components/Buttons/FormButton";


const PlantManagementHeader = () =>
{

    return (
        <div className='header'>
            <h1>Plant Management</h1>

            <FormButton
            >
                add new Plant
            </FormButton>
        </div>
    )
}

export default PlantManagementHeader;