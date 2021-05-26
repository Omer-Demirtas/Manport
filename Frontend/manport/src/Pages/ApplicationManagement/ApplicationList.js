import { AiFillDelete, AiFillEdit, AiOutlineFundView } from "react-icons/ai";
import Button from "../../Components/Buttons/Button";
import Switch from "../../Components/Input/Switch";
import DataTable from "../../Components/Table/DataTable";
import EnumTypes from '../../Utils/Data/EnumTypes.json'

/*
    Example of one column
    {
        id: -> number -> for key,
        text: -> String -> for column name
        custom -> function: (row) => {} -> for spesific data
        isSortable: boolean -> sortable  
        type: number or string for sortable -> not neceserry if isSortable is false
    }
*/

const ApplicationList = (props) =>
{

    const {
        updateApp,
        deleteApp,
        apps,
        history
    } = props;

    const columns = 
    [
        {
            id: 5,
            text: 'id',
            fieldName: 'id',
            isSortable: true,
            type: 'number'
        },
        {
            id: 1,
            text: 'Full Name',
            fieldName: 'fullName',
            isSortable: true,
            type: 'string'
        },
        {
            id: 4,
            text: 'Business Area',
            custom: (row) => EnumTypes['businessArea'][row.businessArea]          
        },
        {
            id: 2,
            text: 'Short Came',
            fieldName: 'shortCode',
            isSortable: true,
            type: 'string'
        },
        {
            id: 3,
            text: 'actions',
            subText: '| add | edit | delete |',
            custom: (row) => (
                <div className='d-flex justify-content-around'>
                    <Button
                        variant='transparant'
                        onClick={() => history.push('/management/edit/' + row.shortCode)}
                    >
                        <AiFillEdit size={24} />
                    </Button>
                    <Button
                        variant='transparant'
                    >
                        <AiOutlineFundView size={24} />
                    </Button>
                    <Button
                        variant='transparant'
                        onClick={() => deleteApp(row.id)}
                    >
                        <AiFillDelete size={24} />
                    </Button>
                    <Switch
                        onChange={(e) => updateApp({...row, isTracking: e.target.checked})}
                        checked={row.isTracking} 
                    />
                </div>
            ),
            isSortable: false,
        },
    ]


    return (
        <div>
            <DataTable 
                columns={columns}
                data={apps}
            />
        </div>
    ) 
}


export default ApplicationList;