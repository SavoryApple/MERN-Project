import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PirateList from './components/PirateList';
import Create from './views/Create';
import PirateAbout from './components/PirateAbout';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    //localhost:3000
    <BrowserRouter>
      <div className="App">
        <Route exact path="/pirate/:id">
          <PirateAbout />
        </Route>
        <Route exact path="/new/pirate">
          <Create/>
        </Route>
        <Route exact path="/pirates">
          <PirateList />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;