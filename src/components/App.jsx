import "../assets/styles/App.css";
import CreateOrder from "./create-order/CreateOrder.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HistoryUser from "./history-user/HistoryUser";
import Login from "./login/Login";
import Order from "./order/Order";
import LandingPage from "./landingpage/LandingPage";
import RegisterUser from "./register-user/RegisterUser";
import RegisterWork from "./register-work/RegisterWork";
import DeliveryDetails from "./order/DeliveryDetails";
import { UserContextProvider } from "../context/UserContext";
import { useUserContext } from "../context/UserContext";
import { useEffect, useState } from "react";
import ordersAPI from "../services/ordersAPI";
import OrderDelivery from "./order/OrderDelivery";
import DeliverDeliveryDetails from "./order/DeliverDeliveryDetails";

function App() {

    return (
        <div className="App">
            <UserContextProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<RegisterUser />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/create-order" element={<CreateOrder />} />
                        <Route path="/history-user" element={<HistoryUser />} />
                        <Route path="/register-work" element={<RegisterWork />}></Route>
                        <Route path="/order/:id" element={<DeliveryDetails />}></Route>
                        <Route path="/order-delivery" element={<OrderDelivery />}></Route>
                        <Route path="/delivery-details" element={<DeliverDeliveryDetails />}></Route>
                    </Routes>
                </Router>
            </UserContextProvider>
        </div>
    );
}

export default App;