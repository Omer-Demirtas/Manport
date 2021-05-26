package com.manportq.manport.Model.types;

import com.fasterxml.jackson.annotation.JsonValue;

public enum FrontEndTypes
{
    No_UI,
    Other,
    Pure_HTML_CSS_JS,
    JSP,
    Apache_Wicket,
    BackboneJs,
    ReactJs;

    @JsonValue
    public int toValue() {
        return ordinal();
    }
}
