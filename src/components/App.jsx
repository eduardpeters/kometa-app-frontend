import "../assets/styles/App.css";
import NoOrder from "./no-order/NoOrder.jsx";
import CreateOrder1 from "./create-order/CreateOrder1.jsx";
import CreateOrder2 from "./create-order/CreateOrder2.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeliveryDetails from "./delivery-details/DeliveryDetails";
import HistoryUser from "./history-user/HistoryUser";

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<NoOrder />} />
                    <Route path="/create-order-1" element={<CreateOrder1 />} />
                    <Route path="/create-order-2" element={<CreateOrder2 />} />
                    <Route path="/delivery-details" element={<DeliveryDetails />} />
                    <Route path="/history-user" element={<HistoryUser />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;