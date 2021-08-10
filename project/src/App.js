import Cartpage from "./Components/Cartpage";
import {BrowserRouter,Route} from "react-router-dom"
import Loadingpage from "./Components/Loadingpage";
import React ,{useEffect,useState} from 'react'


function App() {
  const [time,settime]=useState(45)

  useEffect(()=>{
    time>0 && 
     setTimeout(()=>{
         settime(time-1)
     },1000)
  },[time])

  return (
    <div className="App">
    <h3>Time-Left: {time}</h3>
    <BrowserRouter>
    <Route exact path = '/'  component={Loadingpage}/>
    <Route exact path = '/cart'  component={Cartpage}/>

    </BrowserRouter>
    </div>
  );
}

export default App;
