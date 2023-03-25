import "./App.css";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import PetParentLogin from "./components/PetParentLogin/PetParentLogin";
import PetParentDashboard from "./components/Dashboards/PetParentDashboard";
import HospitalList from "./components/HospitalList";
import HospitalDashboard from "./components/HospitalDashboard";

function App() {
  return (
    <div className="App">
      <PetParentDashboard />
      <HospitalList></HospitalList>
      <HospitalDashboard></HospitalDashboard>
      {/* <PetParentLogin /> */}
    </div>
  );
}

export default App;
