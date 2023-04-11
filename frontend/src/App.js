import { Route,Router,Routes } from "react-router-dom";
import Home from "./Component/Home";
import PaymentSucess from "./Component/PaymentSucess";
import Order from "./Component/Order";
import NavBar from "./Component/Navbar";
import Main from "./Component/Main";
function App() {
  return (
   <>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/product" element={<Home/>}></Route>
        <Route path="/paymentsuccess" element={<PaymentSucess/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
      </Routes>
      </>
  );
}

export default App;
