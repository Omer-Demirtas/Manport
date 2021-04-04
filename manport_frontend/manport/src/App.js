import './App.css';
import React, {useEffect} from 'react'
import HomePage from './components/HomePage'
import Dashboard from './components/DashBoard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import WebSocket from './components/WebSocket';
import {useDispatch} from 'react-redux'
import {initializeApp} from './Redux/actions/AppActions'
import ApplicationManagementPage from './components/Management';
import QuickLinks from './components/QuickLinks';
import IssuesPage from './components/IssuesPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch()

  dispatch(initializeApp());


  return (
    <div id="app" className="container text-white text-center mt-5">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/management" exact>
            <ApplicationManagementPage />
          </Route>
          <Route path="/management/:type/:appCode" children={<ApplicationManagementPage/>}/>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/quicklinks" exact>
            <QuickLinks />
          </Route>
          <Route path="/issues" exact>
            <IssuesPage />
          </Route>
        </Switch>
      </Router>

      <WebSocket />
    
    </div>
  );
}

export default App;
