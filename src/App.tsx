import React from "react";
import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StartPage from './components/pages/StartPage'

const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;