import React,{useState,useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseEffect = (props) => {

	//o use effect funciona como efeito colatreal
	//por exemplo caso voce modifique algo na sua interface ele
	//pode atualizar outra coisa

	function calcFatorial(n){

		if(n<0) return -1
		if(n===0) return 1

		return calcFatorial(n-1)*n
	}

	const [number,setNumber] = useState(1)
	const [fatorial,setFatorial] = useState(1)

	/*essa chamada não é permitida dentro do corpo da funçao
	ela gera erro pois é justo no corpo que a renderização é executada
	se chamarmos a função aqui vai gerar uma renderização infinita
	setFatorial(calcFatorial(number))
	pra resolver isso podemos usar o useEffect ele
	possui dois parametros o primerio é uma função
	callbeack( ou seja uma função chamda quando o effect acontecer),
	o segundo parametro é opcional e é uma lista de dependencias
	no nosso caso passamos o number(estado inicial) como dependencia e ele é o mesmo
	parametro usado pra calcular o fatorial da nossa função,
	o useEffect é usado quando um dado pode alterar outro dado da aplicação cpomo um estado alterar outro estado
	*/

	useEffect(
		function(){
			setFatorial(calcFatorial(number))
		},[number]
		)

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"/>
                <div className="center">

                <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
                <span className="text">Fatorial</span>
                <span className="text red">{fatorial===-1?'Não existe':fatorial}</span>
                </div>
            
            
        </div>
    )
}

export default UseEffect
