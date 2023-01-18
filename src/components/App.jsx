import "../assets/styles/App.css";
import NoOrder from "./no-order/NoOrder.jsx";
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */

function App() {
    return (
        <div className="App">
            <NoOrder />
        </div>
    );
}

export default App;

/* <Router>
<Navbar />
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
</Router> */