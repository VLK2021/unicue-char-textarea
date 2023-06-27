import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import Layout from "./Layout/Layout";
import {Home} from "./component";


function App() {


    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
