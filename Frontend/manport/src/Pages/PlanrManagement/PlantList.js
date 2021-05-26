import { useSelector } from "react-redux"
import FormButton from "../../Components/Buttons/FormButton";
import DataTable from "../../Components/Table/DataTable"
import api from '../../Api'
import AsyncButton from "../../Components/Buttons/AsyncButton";
import { AiFillDelete, AiOutlineEdit} from "react-icons/ai";

const updatePlant = async (plant) => 
{ 
    try 
    {
        const resp = await api().put('/plants', plant)
        return resp.data;
    }
    catch (err) 
    {
        console.error(err);
    }
}

const deletePlantById = async (id) =>   
{
    console.log(`id`, id)
    try 
    {   
        const resp = await api().delete('/plants/' + id)
        console.log(`resp`, resp)
        return resp.data;
    }
    catch (err) 
    {
        console.error(err);
    }
}

const PlantList = (props) =>
{
    const plants = useSelector(state => state.AppReducer.plants)
    const {
        setFormData,
        defaultFormData
    } = props;
    

    const columns =
    [
        {
            id: 2,
            text: 'id',
            fieldName: 'id'
        },
        {
            id: 1,
            text: 'Country',
            fieldName: 'countryName',
            isSortable: true,
            type: 'string'
        },
        {
            id: 3,
            text: 'Short Code',
            fieldName: 'shortCode'
        },
        {
            id: 4,
            text: 'Full Name',
            fieldName: 'fullName'
        },
        {
            id: 5,
            text: 'actions',
            subText: '| Update | Delete |',
            custom: (row) => (
                <div 
                    className='d-flex justify-content-around align-items-center'
                    >
                    <FormButton
                        variant='transparant'
                         onClick={() => setFormData({...defaultFormData, type: 'update', data: row, action: (plant) => updatePlant(plant)})}
                    >
                        <AiOutlineEdit size={24} />
                    </FormButton>
                    <AsyncButton
                        variant='transparant'
                        onClick={() => deletePlantById(row.id) }
                    >
                        <AiFillDelete size={24} />
                    </AsyncButton>
                </div>
            )
        }
    ]
    
    return (
        <div>
            <DataTable
                columns={columns}
                data={plants}
            />
        </div>
    )
}

export default PlantList;