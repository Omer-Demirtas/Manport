package com.manportq.manport.Model.Messages;
import com.manportq.manport.DTO.CountryDTO;
import com.manportq.manport.Model.types.MessageTypes;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@AllArgsConstructor
@Getter
@Setter
public class CountryMessage
{
    MessageTypes type;
    CountryDTO country;
}
