import { useState } from "react";
import api from "../../Api";
import FormModel from "../../Components/Modal/FormModel";
import PlantManagementHeader from "./PlanrManagementHeader";
import PlantManagementBody from "./PlantManagementBody";

const createPlant = async (plant) =>
{
    try 
    {
        const resp = await api().post('/plants', plant)
        return resp.data;
    }
    catch (err) 
    {
        console.error(err);
    }
}

const defaultFormData = 
{
    title: 'Plant',
    type: 'add',
    data: {countryName: '', fullName: '', shortCode: ''},
    action: (plant) => createPlant(plant),
    forms: 
    [
        {
            text: 'Country Name',
            name: 'countryName'
        },
        {
            text: 'Full Name',
            name: 'fullName'
        },
        {
            text: 'Short Code',
            name: 'shortCode'
        },
    ]
}


const PlantManagement = () =>
{
    const [formData, setFormData] = useState(defaultFormData)

    const handleResetForm = () =>
    {
        setFormData(defaultFormData);
    }

    return (
        <div>
            <FormModel {...formData} handleResetForm={handleResetForm} />
            <PlantManagementHeader />
            <PlantManagementBody 
                defaultFormData={defaultFormData}
                setFormData={setFormData} 
            />
        </div>
    )
}

export default PlantManagement;