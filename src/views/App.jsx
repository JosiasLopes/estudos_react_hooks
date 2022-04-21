import './App.css'
import React,{useState} from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import {DataContext,data} from '../data/DataContext.js'
import Store from '../data/Store.jsx'

const App = props => {

    const[state,setState] = useState(data)
//o provider tem o atributo value onde passamos o valor para esse contexto

//foi encapsulado o context com o componente store
    return (
        <Store>
    	<DataContext.Provider value={{state,setState}}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
        </DataContext.Provider>
        </Store>
    )
}

export default App