package com.manportq.manport.Api;
    
import com.manportq.manport.Model.Messages.WsMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
/*
    Güncellenecek
*/

@Controller
public class WebSocketController
{
    @MessageMapping("/app")
    @SendTo("/topic/app/")
    public void MessageMapping(@Payload WsMessage message)
    {
        System.out.println("received message : " + message.toString());
    }

}
