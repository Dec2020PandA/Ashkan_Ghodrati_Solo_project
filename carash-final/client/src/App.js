import AddCar from "./views/AddCar"
import './App.css';
import {Router} from "@reach/router"
import UpdateCar from "./views/UpdateCar"
import Main from "./views/Main"
import Details from "./views/Details"


function App() {
  return (
    <div className="App">
      <Router>
     
        <Main path="/"/>
     <AddCar path="/cars/new" />
     <UpdateCar path="/cars/:id/edit" />
     <Details path="/cars/:id" />
     </Router>
    </div>
  );
}

export default App;
