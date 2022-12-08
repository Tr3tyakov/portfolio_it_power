import React from "react";
import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StartPage from './components/pages/StartPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;