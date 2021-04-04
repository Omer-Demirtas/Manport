import axios from "axios";


export function api() 
{

    return axios.create({
        baseURL: "http://localhost:8080"
    })

}

export const createApp = (data) => 
{
    api().post("/api/apps", data)
    .then( response => console.log(`response of create`, response))
    .catch(err => console.error(err))
  };
  
export const deleteAppById = (id) => {
    api().delete("/api/apps/"+id)
    .then(response => console.log(`response of delete `, response))
    .catch(err => console.error(err))
};

/* ApplicationModel
let application = 
{
    name: "nassin",
    createdDate: new Date(),
    createdBy: 0,
    errorType: "LOW"
}
*/