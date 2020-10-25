import React,{ Component } from 'react';
import { Route,Switch} from 'react-router-dom';
import {Postjob,SidebarComp,Contact,Portal} from './components';
import './App.css'
class App extends Component {
  
  
  render(){
    return (
    <div className="app">
      <SidebarComp />
      <Switch>
        <Route path="/jobpost"  component={Postjob}/>
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Portal} />
      </Switch>
    </div>
  );
 }
}

export default App;
