package com.manportq.manport.Model.Messages;


import com.manportq.manport.Model.Application;
import com.manportq.manport.Model.types.MessageTypes;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class WsMessage
{
    private Long senderId;
    private MessageTypes type;
    private Application app;
}
