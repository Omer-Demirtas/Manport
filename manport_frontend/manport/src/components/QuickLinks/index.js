import React from 'react'
import { useSelector } from 'react-redux'
import QuickLinksList from './QuickLinksList'

export default function QuickLinks() {
    
    return (
        <div>
            <h1>QuickLinks</h1>
            <QuickLinksList />
        </div>
    )
}
