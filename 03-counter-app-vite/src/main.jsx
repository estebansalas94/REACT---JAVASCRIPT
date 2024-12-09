import React from 'react';
import ReactDOM from 'react-dom/client';
// import {HelloWordApp} from './HelloWordApp';
import { FirstApp } from './FirstApp';
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
        {/* <HelloWordApp></HelloWordApp> */}
    </React.StrictMode>
);