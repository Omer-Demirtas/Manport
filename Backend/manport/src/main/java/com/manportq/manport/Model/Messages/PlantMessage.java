package com.manportq.manport.Model.Messages;


import com.manportq.manport.DTO.PlantDTO;
import com.manportq.manport.Model.types.MessageTypes;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class PlantMessage
{
    private final MessageTypes type;
    private final PlantDTO plant;
}
