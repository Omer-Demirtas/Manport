import React from 'react'
import ApplicationProporties from './ApplicationProporties'

export function ApplicationPage(props) {
    console.log(`props of applicationPAge`, props)
    
    const {app} = props;

    return (
        <div>
            <ApplicationProporties app={app}/>
        </div>
    )
}
