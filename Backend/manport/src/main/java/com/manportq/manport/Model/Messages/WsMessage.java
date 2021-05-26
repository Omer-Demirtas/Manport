package com.manportq.manport.Model.Messages;


import com.manportq.manport.DTO.ApplicationDTO;
import com.manportq.manport.Model.Application;
import com.manportq.manport.Model.types.MessageTypes;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class WsMessage
{
    private MessageTypes type;
    private ApplicationDTO app;
}
