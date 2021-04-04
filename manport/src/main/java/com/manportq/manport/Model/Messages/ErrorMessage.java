package com.manportq.manport.Model.Messages;

import com.manportq.manport.Model.Issue;
import com.manportq.manport.Model.types.ErrorType;
import com.manportq.manport.Model.types.MessageTypes;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ErrorMessage
{
    private MessageTypes type;
    private Issue issue;
}
