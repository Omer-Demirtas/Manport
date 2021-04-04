import React from 'react'
import './index.css';

const title = "TOYOTA - Manufacturing & Quality Systems Portal"

export default function HomePage() {
    return (

        <div className="container text-center">
            
            <h1 className="mt-5">
                {title}
            </h1>

            <div className="row mt-5 justify-content-around">

                <div className="col-md-3 homebuttons">
                    <h1>
                        Monitoring Dashboard
                    </h1>
                </div>
                <div className="col-md-3 homebuttons">
                    <h1>
                        Application Management
                    </h1>
                </div>
                <div className="col-md-3 homebuttons">
                    <h1>
                        Logged Issiue
                    </h1>
                </div>

            </div>

        </div>
    )
}
