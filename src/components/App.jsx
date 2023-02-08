import "../assets/styles/App.css";
import CreateOrder from "./create-order/CreateOrder.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeliveryDetails from "./order/DeliveryDetails";
import HistoryUser from "./history-user/HistoryUser";
import Login from "./login/Login";
import Order from "./order/Order";
import LandingPage from "./landingpage/LandingPage";
import RegisterUser from "./register-user/RegisterUser";
import RegisterWork from "./register-work/RegisterWork";

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegisterUser/>} />
                    <Route path="/order" element={<Order/>} />
                    <Route path="/create-order" element={<CreateOrder />} />
                    <Route path="/delivery-details" element={<DeliveryDetails />} />
                    <Route path="/history-user" element={<HistoryUser />} />
                    <Route path="/register-work" element={<RegisterWork/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;