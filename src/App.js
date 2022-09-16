import './App.css';
import LoginPage from './components/loginComponent/LoginPage';
import Home from './screens/Home';
import RegistrationScreen from "./screens/registrationScreen/RegistrationScreen"

import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <img className='circle' src={require('./assets/images/circle.png')} alt="" />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="Register" element={<RegistrationScreen/>} />
        <Route path="Home" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;