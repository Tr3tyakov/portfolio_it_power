import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from "react-redux";
import {store} from "./components/store/store";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './components/theme/theme'
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>
)
;

