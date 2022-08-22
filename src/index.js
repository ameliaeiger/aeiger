import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const PORT = process.env.PORT || 5000
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)