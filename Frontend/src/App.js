import "./App.css";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import PetParentLogin from "./components/PetParentLogin/PetParentLogin";
import PetParentDashboard from "./components/Dashboards/PetParentDashboard";
import PuppyFarm from "./components/PuppyFarmLogin/PuppyFarm";
import GovSignin from "./components/GovLogin/GovSignin";
import VetLog from "./components/VetLog.js/VetLog";
import HospitalList from "./components/Dashboards/HospitalList";
import HospitalDashboard from "./components/Dashboards/HospitalDashboard";
import Homepage from "./components/Home/Homepage";
import PuppyFarmDashboard from "./components/Dashboards/PuppyFarmDashboard";
import GovDashboard from "./components/Dashboards/GovtDashboard";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route
            path="/puppyFarmLogin"
            element={<PuppyFarm></PuppyFarm>}
          ></Route>
          <Route path="/govLogin" element={<GovSignin></GovSignin>}></Route>
          <Route path="/vetLogin" element={<VetLog></VetLog>}></Route>
          <Route
            path="/PetParentLogin"
            element={<PetParentLogin></PetParentLogin>}
          ></Route>
          <Route
            path="/petParentDashboard"
            element={<PetParentDashboard></PetParentDashboard>}
          ></Route>
          <Route
            path="/puppyFarmDashboard"
            element={<PuppyFarmDashboard></PuppyFarmDashboard>}
          ></Route>
          <Route
            path="/govDashboard"
            element={<GovDashboard></GovDashboard>}
          ></Route>
          <Route
            path="/hospitalDashboard"
            element={<HospitalDashboard></HospitalDashboard>}
          ></Route>
          <Route
            path="/hospitalList"
            element={<HospitalList></HospitalList>}
          ></Route>
          {/* <PetParentLogin /> */}
        </Routes>
      </BrowserRouter>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
