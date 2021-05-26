package com.manportq.manport.Model.types;

import com.fasterxml.jackson.annotation.JsonValue;

public enum  ResponsibleTeamTypes
{
    Other,
    Manufacturing_Systems,
    EMC_Quality;

    @JsonValue
    public int toValue() {
        return ordinal();
    }
}
