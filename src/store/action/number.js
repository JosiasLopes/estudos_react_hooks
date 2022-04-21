
export function numberAdd2(dispatch){

console.log("Acesse a função numberAdd2")
console.log("vou lançar a action")

	dispatch({
		type: 'add2'
	})
}