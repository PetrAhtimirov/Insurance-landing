import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from "../pages/MainPage";

import './app.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
