import { useState } from "react";
import Button from "../../../Components/Buttons/Button";
import ErrorPage from "../../Error/ErrorPage";
import Details from "./Details"
import FactoryManagement from "./FactoryManagement";
import IssueManagement from "./IssueManagement";
import QuickLinks from "./QuickLinks"


const defaultApp = 
{
    "id": null,
    "fullName": "",
    "shortCode": "",
    "responsible": "",
    "lineCountOfBackend": "",
    "lineCountOfFrontend": "",
    "releaseDate": "",
    "isTracking": false,
    "isStopProduction": false,
    "businessArea": 0,
    "database": 0,
    "responsibleTeam": 0,
    "backend": 0,
    "frontend": 0,
    "countries": []
}

const EditViewPage = (props) =>
{
    const {
        params,
        mode,
        _app,
        plants
    } = props;

    const [app, setApp] = useState(_app ? _app : defaultApp)

    const handleChange = (e) =>
    {
        setApp({...app, [e.target.name]: e.target.value})
    }

    return (
        app === undefined && params.type !== 'add' ? 
            <ErrorPage message="We can't find any app with your given "/>
        :
        <div>  
            <Details 
                app={app}
                handleChange={handleChange}
            />
            <QuickLinks />

            <FactoryManagement
                plants={plants}
                countries={app.countries}
                appId={app.id}
            />

            <IssueManagement 
            
            />

            <div className=''>
                <Button
                    onClick={() => mode.action(app)}
                >
                    {mode.text}
                </Button>
            </div>
        </div>
  
    )
}


export default EditViewPage;