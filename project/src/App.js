import Cartpage from "./Components/Cartpage";
import {BrowserRouter,Route} from "react-router-dom"
import Loadingpage from "./Components/Loadingpage";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Route exact path = '/'  component={Loadingpage}/>
    <Route exact path = '/cart'  component={Cartpage}/>

    </BrowserRouter>
    </div>
  );
}

export default App;
