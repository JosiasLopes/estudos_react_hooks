export const estadoInicial ={
	number:0,
	cart:[],
	user:null
}


//a função recebe o state inicial em sua versão mais atual
//e uma ação, a action mostra como sera alterado o estado a partir dessa ação
//toda a action tem um atributo type que vai dizer o que vai ser feito na ação
//ou seja o reducer trabalha de acordo com cada ação ele evolui o estado 
//o action é um objeto
export function reducer(state, action){
	switch(action.type){
		case 'add2':
		 return{...state,number: state.number+2}
		 case 'add3':
		  return{...state,number: state.number+3}
		case 'login':
		  return{...state,user: {name:action.name,cpf:'230456988'}}
		case 'conta':
		  return{...state,number: conta(state,action.soma)}
		  default:
		  return state;
	}

}

function conta(state,valor){
	
	
	return state.number+valor*valor
}