


const DataTableBody = (props) =>
{
    const {
        rows,
        columns
    } = props;

    return (
        rows.map(row => (
            <tr key={row.id}>
                {
                    columns.map(col => (
                        <td key={col.id}>
                            {
                                col.custom ?
                                col.custom(row) 
                                :
                                row[col.fieldName]
                            }
                        </td>
                    ))
                }
            </tr>
        ))
    )
}


export default DataTableBody;