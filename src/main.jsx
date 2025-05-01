import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';
import '../src/styles.css';
import CounterApp from './CounterApp';

// all starts with a funxpzctional component


//  now i renderize the application
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
<<<<<<< HEAD
        <  CounterApp value={0} name='Daniel' subtitle='Galvan' title='Go' />
=======
        <  FirstApp title="Hola, soy Daniel" />
>>>>>>> 2f2eca31a74d0ec34c679cefd24da66c4bf3fc05
    </React.StrictMode>
) 