package com.manportq.manport.Model.types;

import com.fasterxml.jackson.annotation.JsonValue;

public enum BackEndTypes
{
    Other,
    Pure_Java,
    JSP,
    PL_SQL,
    Spring,
    SpringBoot;

    @JsonValue
    public int toValue() {
        return ordinal();
    }
}
