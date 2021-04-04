import React, {useEffect} from 'react'
import ApplicationList from './AppManagementList';

let a = 0;

export default function Dashboard() {
    useEffect(() => {
        
        console.log(`Dashboarrd useEffect`)

    }, [])

    


    return (
        <div>
            <h1>{++a}</h1>
            <ApplicationList  />
        </div>
    );
        /*
    return (
    <div>
        <button
        onClick={(e) => sendMessage("CREATE") }
        className="btn btn-success mt-4">
        sendMwssage    
        </button>
        <button
        onClick={(e) => dispatch(createApp({name: "Naber", createdDate: new Date(), createdBy: 0}))}
        className="btn btn-success mt-4">
        createApp    
        </button>
        <div className="row text-start ">
            {
                state.apps.map(application => (
                    <div key={application.id} className="row mt-2 app">
                        <Application color={getAppColor(application.errorType)} app={application}/>
                    </div>
                ))
            }
        </div>
    </div>
    )
    */
}
