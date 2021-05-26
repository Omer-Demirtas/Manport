import React from 'react';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import { 
  BrowserRouter as Router,
  Route, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ApplicationManagement from './Pages/ApplicationManagement';
import IssueManagement from './Pages/IssueManagement';
import PlantManagement from './Pages/PlanrManagement';
import LoadingPage from './Components/Loading/LoadingPage';
import { useSelector } from 'react-redux';
import './App.css'
import WebSocket from './Utils/WebSocket';

const App = () =>
{
  const state = useSelector(state => state.ManportReducer)
  return (
    <div className='container text-center text-white'>
      <Router>
          <NavBar />
          <LoadingPage loading={state.initializing}>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/management" exact component={ApplicationManagement} />
              <Route path="/management/:type/:appCode?" exact component={ApplicationManagement} />
              <Route path="/issues" exact component={IssueManagement} />
              <Route path="/plants" exact component={PlantManagement} />
          </Switch>
          </LoadingPage>
      </Router>
      <WebSocket />
    </div>
  )
}


export default App;