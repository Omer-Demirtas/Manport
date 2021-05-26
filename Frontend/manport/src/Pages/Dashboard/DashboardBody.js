import React from "react"
import { useSelector } from "react-redux"
import DashboardItem from "./DashboardItem"



const DashboardBody = () =>
{
 
    const apps = useSelector(state => state.AppReducer.apps)

    return (
        <div className='row text-start '>
        {
            apps.map(app => (
                <DashboardItem  
                    key={app.id}  
                    app={app} 
                />
            )) 
        }
        </div>
    )
}

/*
 
*/

export default DashboardBody;