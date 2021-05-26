import { useState } from "react";
import FormModel from "../../Components/Modal/FormModel";
import IssueManagementBody from "./IssueManagementBody";
import IssueManagementHeader from "./IssueManagementHeader";

const defaultFormData = 
{
    title: 'Issue', 
    forms: 
    [
        {
            text: 'Input Name',
            name: 'inputName'
        }
    ]
}

const IssueManagement = () =>
{
    const [formModelData, setFormModelData] = useState(defaultFormData)

    const handleForm = () =>
    {
        
    }

    const handleResetForm = () =>
    {
        setFormModelData(defaultFormData);
    }

    return (
        <div>
            <FormModel {...formModelData} handleResetForm={handleResetForm}/>
            <IssueManagementHeader 
                {...{handleForm}}
            />
            <IssueManagementBody
                {...{handleForm,}}
            />
        </div>
    )
}


export default IssueManagement;