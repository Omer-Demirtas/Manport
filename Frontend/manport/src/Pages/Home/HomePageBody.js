import React from 'react'
import {FiMonitor} from 'react-icons/fi'
import {FaWrench} from 'react-icons/fa'
import {AiFillWarning} from 'react-icons/ai'


const HomePageBody = () =>
{
    return (
        <div className='row justify-content-around mt-5'>
            
            <div className="col-md-3 my-3">
                    <FiMonitor color="white" size={120}/>   
                    <h3 className='mt-3'>
                        Monitoring Dashboard
                    </h3>
                </div>
                <div className="col-md-3 my-3">
                    <FaWrench color="white" size={120}/>                   
                    <h3 className='mt-3'>
                        Application Management
                    </h3>
                </div>
                <div className="col-md-3 my-3">
                    <AiFillWarning color="white" size={120}/>                   
                    <h3 className='mt-3'>
                        Logeed Issues
                    </h3>
                </div>
        </div>
    )
}

export default HomePageBody;