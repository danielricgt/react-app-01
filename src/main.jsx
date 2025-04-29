import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';
import '../src/styles.css';
import CounterApp from './CounterApp';

// all starts with a funxpzctional component


//  now i renderize the application
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <  CounterApp value={1} name='Daniel' subtitle='Galvan' title='Go' />
    </React.StrictMode>
) 