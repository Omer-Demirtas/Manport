import * as actionTypes from '../actions/actionTypes'    
import * as errorTypes from '../actions/errorTypes'

/*
  WsMwssage => 
  type: UPDATE, CREATE, DELETE
  Applicatin: => 
      name: 
      errorType: NORMAL, WARRING, ERROR
      createdDate: Date()
      createdBy: Long
  senderId: Long
*/

const INITIAL_STATE = 
{
    apps: [],
    mappedApps: new Set(),
    plants: [],
}

const updateErrorType = (app, issue) => 
{
    console.log(`app`, app)
    console.log(`issue`, issue)

    return app.id === issue.appId ? 
        {...app,
            countries: app.countries.map(country => 
                {
                    return country.id === issue.plantId ? 
                        {...country, 
                            prods: country.prods.map(prod => 
                                {
                                    return prod.id === issue.prodId ?
                                        {...prod, jobs: prod.jobs.map(job => 
                                            {
                                                return job.id === issue.jobId ? 
                                                    {...job, errorType: issue.errorType}
                                                    :
                                                    job
                                            })}
                                        :
                                        prod;
                                } )}
                        :
                        country;
                })
        }
        :
        app 
    }



/*
    uygulamada herhangi bir uygulama eklendiğinde application içindeki 
    her bir app 

*/

const getPlantsNameById = (plants, id) =>
{
    return (plants.find(plant => plant.id === id)).countryName;
}
const updateAppCountryName = (app, plants) => 
{
    return {...app, countries: app.countries.map(country => {return {...country, name: getPlantsNameById(plants, country.plantId)}})}
}

const updateAllAppsCountryName = (apps, plants) => 
{
    return apps.map(app => updateAppCountryName(app, plants))
}

export const AppReducer = (state = INITIAL_STATE, action) => 
{
    switch (action.type) {
        case actionTypes.initializeApp:
        console.log(`initialize action`, action)
        return {...state, ...action.payload, apps: updateAllAppsCountryName(action.payload.apps, action.payload.plants)}

        case actionTypes.createApp:
            return {...state,asd: (++state.asd), apps: [...state.apps, action.payload]};
        
        case actionTypes.updateApp:
            return {...state, apps: state.apps.map(app => app.id === action.payload.id ? action.payload : app)};
        
        case actionTypes.deleteApp:
            return {...state, apps: state.apps.filter(app => app.id !== action.payload)} 
        
        case actionTypes.updateErrorType:
            return {...state, apps: state.apps.map(app => updateErrorType(app, action.payload.issue))}

        default:
            return state;
    }
}