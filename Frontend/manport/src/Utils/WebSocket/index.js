import { useRef } from "react";
import { useDispatch } from "react-redux";
import SockJsClient from 'react-stomp';
import { createPlant, deletePlant, updatePlant } from "../Redux/Actions/PlantActions";
import { createApp, updateApp, deleteApp, updateErrorType, createCountry, deleteCountry } from "../Redux/Actions/ApplicationActions";
import { createIssue } from "../Redux/Actions/IssueActions";

export const sendMessage = (type, app) => {
    let wsMessage = 
    {
      type: type,
      app: app
    }

    clientRef.sendMessage(
      "/app/app",
      JSON.stringify(wsMessage)
    );
};


let clientRef ;

export default function WebSocket() {

    clientRef = useRef();
    
    const dispatch = useDispatch()
    
    return (
        <SockJsClient
            url="http://localhost:8080/ws/"
            topics={["/topic/app/"]}
            onConnect={() => {
            console.log("connected");
            }}
            onDisconnect={() => {
              console.log("Disconnected");
            }}
            
            onMessage={(msg) => {
              console.log(`msg`, msg)
              switch (msg.type) {
                case "UPDATE_APP":
                  console.log(`UPDATE`)
                  dispatch(updateApp(msg.app))
                  break;
                case "CREATE_APP":
                  console.log(`CREATE`)
                  dispatch(createApp(msg.app))
                  break;
                case "DELETE_APP":
                    console.log(`DELETE`)
                    dispatch(deleteApp(msg.app.id))
                    break;
                case "CREATE_ISSUE":
                    console.log(`CREATE_ISSUE`)
                    dispatch(updateErrorType(msg.issue))
                    dispatch(createIssue(msg.issue))
                    break;
                case 'CREATE_PLANT':
                  console.log(`CREATE PLANT`)
                    dispatch(createPlant(msg.plant))
                  break;
                case 'DELETE_PLANT':
                  dispatch(deletePlant(msg.plant.id))
                  break;
                case 'UPDATE_PLANT':
                  dispatch(updatePlant(msg.plant))
                  break;
                case 'CREATE_COUNTRY':
                  dispatch(createCountry(msg.country))
                  break;
                case 'DELETE_COUNTRY':
                  dispatch(deleteCountry(msg.country.id))
                  break;
                default:
                  console.error("Anlaşılmayan metod!")
                  break;
              }
            }}
          
        ref={(client) => {
          clientRef = client;
        }}
      />
    )
}