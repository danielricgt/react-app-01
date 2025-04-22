import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';
import '../src/styles.css';

// all starts with a functional component


//  now i renderize the application
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <  FirstApp  title='Hola soy Goku' />
    </React.StrictMode>
) 