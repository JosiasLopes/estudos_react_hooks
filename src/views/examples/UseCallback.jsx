import React,{useState,useCallback} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle.jsx'
import CallbackButton from './CallbackButton.jsx'

const UseCallback = (props) => {

	const [count,setCount] = useState(0)


	//o use callback retorna uma função no cashead ao inves de um valor casheado como no useMemo

	//toda função dentro do corpo do componente é recriada em memoria sempre que o componente
	//for renderizado pra evitar isso podemos saur o useCallback
	//function inc(delta){
		
	//}
    //ao inves de usarmos o state count ja que ele se modifica
    //e queremos passar uma unica vez vamos passar uma função claaback com o valor atual de count
    //e na lita de depeendencia vamos passar o setCouint
    //o setCount só um criado uma unica vez não importa quandtas vezes o componente seja renderizado
    //entao podemos usar o setCount como dependencia do useCallback fazendo assim
    //com que o componente que recebe essa função(o inc) via props seja rederizado uma unica vez
    //mesmo que os valores sejam atualizados
	const inc =useCallback(function(delta){
		setCount((cur)=>cur+delta)
	},[setCount])
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"/>
        <SectionTitle title="Sobre o use callback"/>
        <span className="center">{count}</span>
        <CallbackButton inc={inc}/>
        </div>
    )
} 

export default UseCallback
