import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Layout from "./pages/Layout";
import LoginReg from "./pages/auth/LoginReg"
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Dashbord from "./pages/Dashbord";
import { useSelector } from "react-redux";
function App() {
  const {access_token} =useSelector(state=>state.auth)
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="login" element={ access_token?<Navigate to='/dashbord'/>:<LoginReg/>}/>
      <Route path="forget" element={<ForgetPassword/>}/>
      <Route path="reset" element={<ResetPassword/>}/>
      </Route>
      <Route path="/dashbord" element={!access_token?<Navigate to='/login'/>:<Dashbord/>}/>
      <Route path="*" element={<h1>Error 404 page not found !!</h1>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
