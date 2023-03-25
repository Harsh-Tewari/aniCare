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
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">

      {/* <PetParentDashboard /> */}
      <PetParentDashboard />
      {/* <HospitalList></HospitalList>
      <HospitalDashboard></HospitalDashboard> */}
      {/* <PuppyFarm />
      <GovSignin />
      <VetLog /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/puppyFarmLogin" element={<PuppyFarm></PuppyFarm>}></Route>
        <Route path="/govLogin" element={<GovSignin></GovSignin>}></Route>
        <Route path="/vetLogin" element={<VetLog></VetLog>}></Route>
        <Route path="/PetParentLogin" element={<PetParentLogin></PetParentLogin>}></Route>
        <Route path="/petParentDashboard" element={<PetParentDashboard></PetParentDashboard>}></Route>
      {/* <PetParentLogin /> */}
      </Routes>
      </BrowserRouter>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
