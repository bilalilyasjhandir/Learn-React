import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime.js'

function MyApp(){
    return(
        <div>
            <h1>This is a custom app</h1>
        </div>
    )
}

const reactElement = {
    type: 'a',
    props:{
        href: 'https://www.linkedin.com/in/bilalilyasjhandir',
        target: '_blank'
    },
    children: 'Click here to visit my LinkedIn'
}

const anotherElement = (
    <a href="https://www.linkedin.com/in/bilalilyasjhandir" target='_blank'>Visit my LinkedIn</a>
)

    const anotherReactElement = React.createElement(
    'a',
    {href: 'https://www.linkedin.com/in/bilalilyasjhandir', target:'_blank'},
    'Visit my LinkedIn'
)

createRoot(document.getElementById('root')).render(
  
    <App />
    // <MyApp />
    //MyApp() //this will also work but do not write
    // reactElement
    // anotherElement
    // anotherReactElement
)
