import { useSelector } from "react-redux";
import api from "../../Api";
import ApllicationManagementHeader from "./ApllicationManagementHeader"
import ApplicationManagementBody from "./ApplicationManagementBody";
import EditViewPage from "./EditViewPage";



const createApp = async (app) => 
{
    try {
        const resp = await api().post('/apps/', app)
        return resp.data;
    } catch (err) {
        console.error(err);
    }
    
};

export const updateApp = async (app) => 
{
    try {
        const resp = await api().put('/apps/', app)
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const deleteApp = async (id) => 
{
    try {
        const resp = await api().delete('/apps/' + id)
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};



const ApplicationManagement = (props) =>
{
    const {
        history,
        match,
    } = props;

    const pageMpde = 
    {
        edit: 
        {
            text: 'save',
            action: (app) => updateApp(app)
        },
        view: 
        {
            text: 'edit',
            action: (app) => history.push('/management/edit/'+app.shortCode)
        },
        add: 
        {
            text: 'create',
            action: (app) => createApp(app)
        }
    }

    const state = useSelector(state => {return {
        apps: state.AppReducer.apps,
        plants: state.AppReducer.plants
    }})

    console.log(`state`, state)

    return (
        match.params.type 
        ?
            <EditViewPage 
                params={match.params}
                mode={pageMpde[match.params.type]}
                _app={state.apps.find(app => app.shortCode.toUpperCase() === match.params.appCode?.toUpperCase())}
                plants={state.plants}
            />
        :
            <div>
                <ApllicationManagementHeader 
                    handleAddPage={() => history.push('/management/add')}
                />
                <ApplicationManagementBody 
                    apps={state.apps}
                    history={history}
                    updateApp={updateApp}
                    deleteApp={deleteApp}
                />
1            </div>
    )
}

export default ApplicationManagement;