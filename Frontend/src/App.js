import "./App.css";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import PetParentLogin from "./components/PetParentLogin/PetParentLogin";
import PetParentDashboard from "./components/Dashboards/PetParentDashboard";

function App() {
  return (
    <div className="App">
      <PetParentDashboard />
      {/* <PetParentLogin /> */}
    </div>
  );
}

export default App;
