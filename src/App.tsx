import React, { createContext, useState, useContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

interface LanguageContextType {
    language: 'en' | 'zh' | '';
    toggleLanguage: () => void;
}

function App() {
    // const LanguageContext = createContext();

    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
            <Home/>
        </div>
    );
}

export default App;
