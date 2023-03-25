import "./App.css";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import PetParentLogin from "./components/PetParentLogin/PetParentLogin";
import PetParentDashboard from "./components/Dashboards/PetParentDashboard";
import PuppyFarm from "./components/PuppyFarmLogin/PuppyFarm";
import GovSignin from "./components/GovLogin/GovSignin";
import VetLog from "./components/VetLog.js/VetLog";
import HospitalList from "./components/HospitalList";
import HospitalDashboard from "./components/HospitalDashboard";
import Homepage from "./components/Home/Homepage";

function App() {
  return (
    <div className="App">
      {/* <PetParentDashboard /> */}
      {/* <PetParentDashboard />
      <HospitalList></HospitalList>
      <HospitalDashboard></HospitalDashboard> */}
      {/* <PetParentLogin /> */}
      {/* <PuppyFarm /> */}
      {/* <GovSignin /> */}
      <VetLog />
      <Homepage />
    </div>
  );
}

export default App;
