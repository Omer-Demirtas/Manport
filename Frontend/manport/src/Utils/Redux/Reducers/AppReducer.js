
const INITIAL_STATE = 
{
    apps: [],
    plants: [],
}

/*
    Yeni bir issue geldiğinde güncelleme de uygulamanın errortype ı güncellenmeli
*/
const updateErrorType = (app, issue) => 
{
    let newApp =
    {
        ...app,
        countries: app.countries.map(country => country.id === issue.plantId ? 
            {
                ...country,
                prods: country.prods.map(prod => prod.id === issue.prodId ? {...prod, jobs: prod.jobs.map(job => job.id === issue.jobId ? {...job, errorType: issue.errorType} : job)} : prod),
            }
            :
                country
            )
    }

    const newCountry = newApp.countries.map(country => 
        {
            const prods = mapProds(country.prods);
            return {
                ...country, 
                prods: prods,
                errorType: getMaxErrorType(prods),
            }
        })

    newApp = 
    {
        ...newApp,
        countries: newCountry,
        errorType: getMaxErrorType(newCountry)
    }
    return newApp;
}

/*
    uygulamada herhangi bir uygulama eklendiğinde application içindeki 
    her bir app 
*/
const getPlantsNameById = (plants, id) =>
{
    return (plants.find(plant => plant.id === id))?.countryName;
}

const getMaxErrorType = (objects) => 
{
    let maxErrorType = 0;

    objects.forEach(object => 
    {
        if(object.errorType > maxErrorType)
        {
            maxErrorType = object.errorType;
        }
    })
    return maxErrorType;
}

const mapProds = (prods) => 
{
    return prods.map(prod => 
    {
        return {
            ...prod,
            jobs: prod.jobs,
            errorType: getMaxErrorType(prod.jobs)
        }
    })
}

const mapCountries = (countries, plants) => 
{
    return countries.map(country => 
    {
        const prods = mapProds(country.prods);
        return {
            ...country, 
            prods: prods,
            errorType: getMaxErrorType(prods),
            name: getPlantsNameById(plants, country.plantId)
        }
    })
}

const mapApp = (app, plants)  => 
{
    const countries = mapCountries(app.countries, plants);
    return (
    {
        ...app,
        countries: countries,
        errorType: getMaxErrorType(countries),
        /*
        backend: typeConverter.getBackendType(app.backend),
        database: typeConverter.getDatabaseType(app.database),
        frontend: typeConverter.getFrontendType(app.frontend),
        responsibleTeam: typeConverter.getResponsibleTeamType(app.responsibleTeam),
        businessArea: typeConverter.getBusinessAreaType(app.businessArea)
        */
    }
    )
}

const mapAllApps = (apps, plants) => 
{
    return apps.map(app => mapApp(app, plants))
}


export const AppReducer = (state = INITIAL_STATE, action) => 
{
    switch (action.type) {
        case 'INITIALIZE_MANPORT':
            return {...state, ...action.payload,apps: mapAllApps(action.payload.apps, action.payload.plants)}
        case 'CREATE_APP':
            return {...state, apps: [...state.apps, mapApp(action.payload)]};
        case 'UPDATE_APP':
            return {...state, apps: state.apps.map(app => app.id === action.payload.id ? mapApp(action.payload, state.plants) : app)};
        case 'DELETE_APP':
            return {...state, apps: state.apps.filter(app => app.id !== action.payload)} 
        case 'UPDATE_ERROR_TYPE':
            return {...state, apps: state.apps.map(app => app.id === action.payload.appId ? updateErrorType(app, action.payload.issue) : app)}

        /*
            Issue
        */
        case 'CREATE_ISSUE':
            return {...state, apps: state.apps.map(app => app.id === action.payload.appId ? updateErrorType(app, action.payload) : app)}
        /*
            Plants
        */
        case 'CREATE_PLANT':
            return {...state, plants: [...state.plants, action.payload]}
    
        case 'UPDATE_PLANT':
            return {...state, plants: state.plants.map(plant => plant.id === action.payload.id ? action.payload : plant)};
        case 'DELETE_PLANT':
            return {...state, plants: state.plants.filter(plant => plant.id !== action.payload)}
        
        case 'CREATE_COUNTRY':
            return {...state}
        case 'DELETE_COUNTRY':  
            return {...state, apps: state.apps.map(app => {return {...app, countries: app.countries.filter(country => country.id !== action.payload)}}  )}
        default:
            return state;
    }
}