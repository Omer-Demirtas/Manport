package com.manportq.manport.Model.types;

import com.fasterxml.jackson.annotation.JsonValue;

public enum DatabaseTypes
{
    Other,
    Oracle,
    MSSQL,
    DB2;

    @JsonValue
    public int toValue() {
        return ordinal();
    }
}
