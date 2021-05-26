import ApplicationList from "./ApplicationList"




const ApplicationManagementBody = (props) =>
{
    const {
        apps,
        history,
        updateApp,
        deleteApp
    } = props;

    return (
        <div>
            <ApplicationList
                history={history}
                updateApp={updateApp}
                deleteApp={deleteApp}
                apps={apps}
            />
        </div>
    )
}

export default ApplicationManagementBody;