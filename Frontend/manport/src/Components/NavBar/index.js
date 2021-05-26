import React from "react";
import {useHistory} from "react-router-dom";

export default function NavBar() {
  
  const history = useHistory();
  
  return (
    <nav
      style={{borderBottom: '1px solid white'}}
      className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
          <h6 className="navbar-brand" href="#asd">Toyota</h6>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h6 className="nav-link active" role="button" onClick={() => history.push('/')} >Home</h6>
              </li> 
              <li className="nav-item">
                <h6 className="nav-link active" role="button" onClick={() => history.push('/dashboard')} >Dashboard</h6>
              </li>
              <li className="nav-item">
                <h6 className="nav-link active" role="button" onClick={() => history.push('/management')} >Management</h6>
              </li>
              <li className="nav-item">
                <h6 className="nav-link active" role="button" onClick={() => history.push('/issues')} >Issue Management</h6>
              </li>
              <li className="nav-item">
                <h6 className="nav-link active" role="button" onClick={() => history.push('/plants')} >Plant Management</h6>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

/*
<Nav.Link onClick={() => history.push('/dashboard')}>Dashboard</Nav.Link>
*/