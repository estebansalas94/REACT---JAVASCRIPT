import React from 'react';
import ReactDOM from 'react-dom/client';
// import {HelloWordApp} from './HelloWordApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
// import { MuseoApp } from './MuseoApp';
// import { WebApp } from './WebApp';


import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={504}/>
        {/* <FirstApp/> */}
        {/* <HelloWordApp></HelloWordApp> */}
        {/* <MuseoApp nombre='PRISMA WORD' direccion='Monaco - Cra89/MZ17-LT20' nit={9889289} /> */}
        {/* <WebApp title="DOCUMENTACIÓN REACT" descripcion='El mejor framework para el frontend de javascript' estado url="https://es.react.dev/" /> */}
    </React.StrictMode>
);