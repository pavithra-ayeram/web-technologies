// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";




function App(){
    return(
        <div className="app">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}
