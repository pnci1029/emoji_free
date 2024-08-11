import {createRoot} from 'react-dom/client';
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Main} from "./components/Main";
import {store} from "./slice";
import {Provider} from "react-redux";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} >
                </Route>
            </Routes>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
