import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'


export const createAppQuickLinksView = (app) => 
{
    return <Row className="text-start mb-3">
                        <Col xs={12}>
                            <h1 style={{borderBottom: "1px solid white"}}>
                                {app.name}
                            </h1>
                        </Col>
                        <Col className="" xs={{ span: 11, offset: 1 }}>
                            {
                                app.countries.map(country => (
                                    <Row>
                                         <h1 style={{borderBottom: "1px solid white"}}>
                                            {country.name.toLowerCase()}
                                        </h1>
                                    </Row>
                                    )
                                )
                            }
                        </Col>
                    </Row>
}


export default function QuickLinksList() {
    const state = useSelector(state => {return {apps: state.AppReducer.apps}})
    
    return (
        <div>
            {
                state.apps.map(app => (createAppQuickLinksView(app)))
            }
        </div>
    )
}
