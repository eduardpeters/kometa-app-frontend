import "../assets/styles/App.css";
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import Navbar from "./navbar/Navbar.jsx";

function App() {
    return (
        <div className="App">
            <h1>Kometa App! &#x2604;&#xFE0F;</h1>
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