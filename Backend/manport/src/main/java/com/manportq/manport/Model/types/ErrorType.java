package com.manportq.manport.Model.types;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ErrorType
{
    NONE,
    LOW,
    MEDIUM,
    HIGH;

    @JsonValue
    public int toValue() {
        return ordinal();
    }
}
