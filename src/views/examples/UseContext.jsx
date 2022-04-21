import React,{useContext,useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle.jsx'
import {DataContext,data} from '../../data/DataContext.js'
import {appContext} from '../../data/Store.jsx'

const UseContext = (props) => {

//aqui passmos o contexto com os valores para o hook usecontext
	const context = useContext(DataContext)

    const {number,setNumber} = useContext(appContext)
	
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"/>
                <SectionTitle title="Sobre use Context"/>
                <div className="center">
                <span className="red">O UseContext não pega o valor inical do Context e sim o valor atual</span>
                <span className="red">valor anterior do contexto</span>
                <span className="red">{context.state.number}</span>
                
                <span className="red">valor atual do contexto</span>
                <span className="red">{context.state.number}</span>

                </div>
                <button className="btn" onClick={(n)=>context.setState({
                    ...context.state,number:context.state.number+1
                }
                    )}>+1</button>

                <SectionTitle title="Exercicio 2 usando Context emcapsulado"/>
                <div className="center">

                <span className="red">valor atual do contexto AppContext</span>
                <span className="red">{number}</span>

                <button className="btn" onClick={(n)=>setNumber(number+1)
                    }>+1</button>
                </div>
        </div>
    )
}

export default UseContext
