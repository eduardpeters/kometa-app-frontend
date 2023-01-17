import "../assets/styles/App.css";
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import Navbar from "./navbar/Navbar.jsx";

function App() {
    return (
        <div className="App">
            <Navbar />
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