import React from 'react'
import {useSelector} from 'react-redux'
import Datas from './Datas'
import IssueList from './IssueList'


export default function IssuesPage() {

    return (
        <div>
            <h1 className="mb-5">Issues</h1>
            <IssueList />
        </div>
    )
}
