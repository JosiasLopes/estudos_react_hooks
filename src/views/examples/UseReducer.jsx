import React,{useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle.jsx'
import {estadoInicial,reducer} from '../../store/config.js'
import {numberAdd2} from '../../store/action/number.js'
import {login} from '../../store/action/user.js'

//customHook
import {useCounter} from '../../hooks/useCounter.js'
import {useFetch} from '../../hooks/useFetch.js'







//parseInt(((state.number+action.soma)*7)/action.soma)+action.soma


const UseReducer = (props) => {

	//o parametro para o useReducer são:
	//1 - a função que vai modificar o estado de acordo com a action
	//2 - o estado que será alterado
    //O dispatch não so cria as action como tambem as dispara

	const [state,dispatch] = useReducer(reducer,estadoInicial)

    //vamos usar nosso customHook
    const [cont,inc,dec] = useCounter(1)

    //custom hook que faz requisição
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'

    const response =useFetch(url)


    function showStates(states){
          //  console.log(response)
        return states.map(
            (state)=><li key={state.nome}>{state.nome}</li>)
    }

    

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"/>
            <SectionTitle title="Sobre useReducer"/>
            <div className="center">

            {
            	state.user ?
            		 <span className="text">{state.user.name}</span>
            		 
            	:
            		 <span className="text">Usuario não esta logado</span>
            	
            }




            <span className="text">{state.number}</span>

            <div>
            	<button className="btn" onClick={()=>numberAdd2(dispatch)}>add2</button>
            	<button className="btn" onClick={()=>dispatch({type:'add3'})}>add3</button>
            {/* na action podemos passar um segundo parametro 
				que pode ser usado pra alterar o estado
            */}
            	<button className="btn" onClick={()=>dispatch({type:'login',name:'Josias Lopes da Silva'})}>Login</button>
                <button className="btn" onClick={()=>login(dispatch,"Carlos Vigario")}>Login com import</button>
            	<button className="btn" onClick={()=>dispatch({type:'conta',soma:7})}>conta</button>
            </div>
            </div>

            <SectionTitle title="custom hook"/>
            <span className="center text">{cont}</span>
            <div className="center">
            <button className="btn" onClick={()=>inc()}>aumenta</button>
            </div>
            <SectionTitle title="custom hook fazendo requisição"/>
            <div className="center">
            <ul className="center">

            {response.data ? showStates(response.data): false}
            </ul>
           
            
            </div>

        </div>
    )
}

export default UseReducer
