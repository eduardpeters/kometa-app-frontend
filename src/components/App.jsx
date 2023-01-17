import "../assets/styles/App.css";
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import Navbar from "./navbar/Navbar.jsx";
import Search from "./search/Search.jsx";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Search />
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