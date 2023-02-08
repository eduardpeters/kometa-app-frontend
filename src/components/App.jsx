import "../assets/styles/App.css";
import CreateOrder from "./create-order/CreateOrder.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeliveryDetails from "./order/DeliveryDetails";
import HistoryUser from "./history-user/HistoryUser";
import Login from "./login/Login";
import Form from "../components/form/Form.jsx"
import LandingPage from "./landingpage/LandingPage";
import Order from "./order/Order";

/* import Formulary from '../Pages/Formulary';
import LandingPage from '../Pages/LandinPage'; */

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Form />} />
                    <Route path="/create-order" element={<CreateOrder />} />
                    <Route path="/delivery-details" element={<DeliveryDetails />} />
                    <Route path="/history-user" element={<HistoryUser />} />
                    <Route path="/order" element={<Order />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;