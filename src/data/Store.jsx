import React,{useState} from 'react'


const initialState  = {
	number: 123,text:"context Api + hooks"
}

//cria o contexto
export const appContext = React.createContext(initialState)

const Store = (props)=>{

	//cria um state com o estado inicial
	const [state,setState] = useState(initialState)

	//essa sintaxe com colchetes quer dizer que voce vai acessar um atributo
	//do objeto state e atribuir um valor
	//setState({
	//		...state,[key]:value
	//	})

	function updateState(key,value){

		setState({
			...state,[key]:value
		})
	}
	return(
		<appContext.Provider value={{
			number: state.number,
			text: state.text,
			setNumber: n=>updateState('number',n),
			setText: t=>updateState('text',t)
		}}>
		{props.children}

		</appContext.Provider>
		)
}
export default Store;