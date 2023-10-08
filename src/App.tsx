import React from 'react';
import './App.css';
import { Editor } from './components/Editor';

const params = [
    {
        id: 1,
        name: 'Thomas',
        type: 'string',
    },
    {
        id: 2,
        name: 'Carl',
        type: 'string',
    },
    {
        id: 3,
        name: 'Jason',
        type: 'string',
    },
]

const model = {
    "paramValues": [
        {
            paramId: 1,
            value: 'alone'
        },
        {
            paramId: 2,
            value: 'maried'
        },
        {
            paramId: 3,
            value: 'alone'
        },
    ],
    "colors": [
        {
            color: 'red',
        }
    ]

}

function App() {
    return (
        <div className="App">
            <Editor params={params} model={model} />
        </div>
    );
}

export default App;
