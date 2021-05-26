import { AiFillDelete, AiOutlineEdit, AiOutlineFundView } from "react-icons/ai"
import { useSelector } from "react-redux"
import Button from "../../Components/Buttons/Button"
import DataTable from "../../Components/Table/DataTable"



const IssueList = (props) =>
{
    const state = useSelector(state => {
        return {
            apps: state.AppReducer.apps,
            issues: state.IssueReducer.issues
        }
    })   

    const columns = 
    [
        {
            id: 1,
            text: 'Date',
            // Backend te erorType eklenecej
            custom: () => '25-01-2020',
            isSortable: 'false'
        },
        {
            id: 2,
            text: 'App Name',
            custom: (row) => state.apps.find(app => app.id === 5)?.shortCode ,
            isSortable: 'false'
        },
        {
            id: 3,
            text: 'Issue Type',
            fieldName: 'jobId',
            isSortable: 'false',
        },
        {
            id: 4,
            text: 'Impect',
            fieldName: 'errorType',
            isSortable: 'false',
        },
        {
            id: 5,
            text: 'Plant',
            fieldName: 'plantId',
            isSortable: 'false',
        },
        {
            id: 6,
            text: 'Description',
            fieldName: 'description',
            isSortable: 'false',
        },
        {
            id: 7,
            text: 'action',
            custom: () => (
                <div className='d-flex justify-content-around'>
                    <Button>
                        <AiOutlineFundView size={24} />
                    </Button>
                    <Button>
                        <AiOutlineEdit size={24} />
                    </Button>
                    <Button>
                        <AiFillDelete size={24} />
                    </Button>
                </div>
            ),
            isSortable: 'false',
        },
        
    ]

    return (
        <div>
            <DataTable 
                columns={columns}
                data={state.issues}
            />
        </div>
    )
}

export default IssueList;