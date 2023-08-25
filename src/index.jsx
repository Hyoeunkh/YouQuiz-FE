import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from "./store/store";
// const sagaMiddleware = createSagaMiddleware();
// const store =createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
