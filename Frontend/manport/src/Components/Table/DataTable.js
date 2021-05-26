import './index.css'
import {FaSort} from 'react-icons/fa'
import DataTableBody from './DataTableBody';
import { useEffect, useState } from 'react';
import Button from '../Buttons/Button';



// küçükten büyüğe
const sortStringSmallToLarge = (a, b) => 
{
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
}

// Büyükten küçüğe sıralama
const sortStringLargeToSmall = (a, b) => 
{
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
}

const DataTable =   (props) =>
{
    const {
        columns,
    } = props;

    const [rows, setRows] = useState([]);
    const [lastSorting, setLastSorting] = useState({type: 'string', last: ''});
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(5)

    useEffect(() => {
        setRows(props.data)
    }, [props.data])

    const handleSort = (col) =>
    {
        if(col.isSortable)
        {
            switch(col.type)
            {
                case 'string':
                    if(lastSorting.type === 'string' && lastSorting.last === 's2l')
                    {
                        const newRows = rows.sort((a,b) => sortStringLargeToSmall(a[col.fieldName],b[col.fieldName]))
                        setRows(newRows)
                        setLastSorting({type: 'string', last: 'l2s'})
                    }
                    else 
                    {
                        const newRows = rows.sort((a,b) => sortStringSmallToLarge(a[col.fieldName],b[col.fieldName]))
                        setRows(newRows)
                        setLastSorting({type: 'string', last: 's2l'})
                    }
                    break;
                case 'number':
                    break;
                default:
                    break;
            }
            setPage(0)
        }
    }

    const handlePageSize = (newSize) =>
    {
        setPageSize(newSize)
    }

    const handleDecrease = () =>
    {
        page !== 0 &&
        setPage(page-1)
    }

    const handleIncrease = () =>
    {
        (page + 1) !== Math.ceil(rows.length / pageSize) && 
        setPage(page+1)
    }

    return (

        <div className=''>
            <div className='d-flex justify-content-between px-2 mb-5'>
                <div className="col-2">
                    <input 
                        type="text"
                        placeholder='Search...'
                        className="bg-dark text-white form-control"
                        style={{border: 'none', borderBottom: '1px solid white'}}
                    />
                </div>
                <span onClick={() => handlePageSize(pageSize+1)}>
                    {pageSize}
                </span>
            </div>


            <div className='table-responsive-md'>
            <table  
                className="table table-dark table-borderless table-striped data-table"
            >
            <thead>
                <tr>
                    {
                        columns.map(col => (
                            <th className='align-top' key={col.id}>
                                <span
                                    onClick={() => handleSort(col)}
                                    className='table-column '>
                                    {col.text}
                                    <FaSort className='mx-1' />
                                </span>
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                <DataTableBody 
                    columns={columns}
                    rows={rows.slice((page*pageSize), (page*pageSize) + pageSize)}
                />
            </tbody>

            </table>
            </div>
            <div className='px-1 d-flex align-items-end flex-column'>
                <div>
                    <Button
                        onClick={handleDecrease}
                        variant='transparant'
                    >
                        {'<'}
                    </Button>
                    <span className='mx-3'>
                    {page + 1} 
                    </span>
                    <Button
                        variant='transparant'
                        onClick={handleIncrease}
                    >
                        {'>'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

DataTable.defaultProps = 
{
    columns: [],
    data: [],
}

export default DataTable;