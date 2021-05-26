package com.manportq.manport.Model.types;

import com.fasterxml.jackson.annotation.JsonValue;

public enum BusinessArea
{
    Other,
    MANUFACTURING,
    Quality,
    Both;

    @JsonValue
    public int toValue() {
        return ordinal();
    }
}
