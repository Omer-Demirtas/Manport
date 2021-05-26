import PlantList from "./PlantList"


const PlantManagementBody  = (props) =>
{
    const {
        setFormData,
        defaultFormData,
    } = props;

    return (
        <div>
            <PlantList 
                setFormData={setFormData}
                defaultFormData={defaultFormData}
            />
        </div>
    )
}

export default PlantManagementBody;