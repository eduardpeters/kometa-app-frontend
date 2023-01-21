import "../assets/styles/App.css";
import NoOrder from "./no-order/NoOrder.jsx";
import { useState } from "react";
import CreateOrder1 from "./create-order/CreateOrder1.jsx";
import CreateOrder2 from "./create-order/CreateOrder2.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<NoOrder />} />
                    <Route path="/CreateOrder1" element={<CreateOrder1 />} />
                    <Route path="/CreateOrder2" element={<CreateOrder2 />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

/* const [layer, setLayer] = useState(false)

{layer ? <NoOrder /> : <CreateOrder />} */