import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Layout from "./pages/Layout";
import LoginReg from "./pages/auth/LoginReg"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Dashbord from "./pages/Dashbord";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="login" element={<LoginReg/>}/>
      <Route path="forget" element={<ForgetPassword/>}/>
      <Route path="reset" element={<ResetPassword/>}/>
      </Route>
      <Route path="/dashbord" element={<Dashbord/>}/>
      <Route path="*" element={<h1>Error 404 page not found !!</h1>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
