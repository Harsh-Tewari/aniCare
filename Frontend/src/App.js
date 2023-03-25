import "./App.css";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import PetParentLogin from "./components/PetParentLogin/PetParentLogin";
import PetParentDashboard from "./components/Dashboards/PetParentDashboard";
import PuppyFarm from "./components/PuppyFarmLogin/PuppyFarm";
import GovSignin from "./components/GovLogin/GovSignin";
import VetLog from "./components/VetLog.js/VetLog";

function App() {
  return (
    <div className="App">
      {/* <PetParentDashboard /> */}
      {/* <PetParentLogin /> */}
      {/* <PuppyFarm /> */}
      {/* <GovSignin /> */}
      <VetLog />
    </div>
  );
}

export default App;
