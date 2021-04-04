import React, {useRef} from 'react'
import SockJsClient from 'react-stomp';
import {useDispatch} from 'react-redux'
import { updateApp, createApp , deleteApp, updateErrorType} from "../Redux/actions/AppActions";
import { createError } from "../Redux/actions/ErrorActions";


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
            case "UPDATE":
              console.log(`UPDATE`)
              dispatch(updateApp(msg.app))
              break;
            case "CREATE":
              console.log(`CREATE`)
              dispatch(createApp(msg.app))
              break;
            case "DELETE":
                console.log(`DELETE`)
                dispatch(deleteApp(msg.app.id))
                break;
            case "ERROR":
                console.log(`ERROR`)
                dispatch(updateErrorType(msg.issue))
                dispatch(createError(msg.issue))
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
