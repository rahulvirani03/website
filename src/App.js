import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import Shirt from './Components/Combine1'
import Tshirt from './Components/Combine2'
import Loginform from './Components/Loginform'
import ImageData from './Components/Image'
import Combine from './Components/Combine'
import Combine3 from './Components/Combine3'
import Navigation from './Components/Navigation'
import Home from './Components/Home';
import DeleteProd from './Components/DeleteShirt';
import AddDel from './Components/AddDel';
import List from './Components/List';
import DeleteTshirt from './Components/DeleteTshirt';
import DeleteSparkle from './Components/DeleteSparkle';
function App() {
  return (
    <div className="App">
          <Navigation/>
       
       <Router>
           
            <Route exact path="/"  >
                <Redirect exact to="/Home" />
            </Route>
            <Route path="/Home" component={Home}/>
            <Route path="/DataUpload" component={ImageData}/>
            <Route path="/loginform" component={Loginform} />
            <Route path="/Combine" component={Combine}/>
            <Route path="/Shirt" component={Shirt}/>
            <Route path="/Tshirt" component={Tshirt}/>
            <Route path="/Sparkle" component ={Combine3}/>
            <Route path="/DeleteShirt" component={DeleteProd}/>
            <Route path="/AddDel" component={AddDel}/>
            <Route path="/List" component={List}/>
            <Route path="/DeleteTshirt" component={DeleteTshirt}/>
            <Route path="/DeleteSparkle" component={DeleteSparkle}/>
       </Router>
    </div>
  );
}

export default App;
