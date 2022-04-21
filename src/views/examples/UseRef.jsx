import React,{useRef,useState,useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle.jsx'

const UseRef = (props) => {
	const [value1,setValue1] = useState('')
    const [value2,setValue2] = useState('')
    const [value3,setValue3] = useState('aa')
	//o hook useRef cria um objeto que tema referencia
	//e pra pegaar seu valor atual usamos a propriedade current, esse hook permite
	//persistir valores
	const cont = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

	//se voce passar o state para o useREf voce tambem consegue evitar a renderização
	//infinita assim como o useEffect
	//ou seja o useRef é diferente do useState ja que não força uma renderização na interface
	//cont.current = value1
	//pega todas as renderizações
	//cont.current = cont.current+1


    //o hook useRef tambem pode controlar elementos do jsx
    //atraves do comando ref ele vai referenciar um objeto de useRef que pode ser usado
    //exemplo
    //<input type="text" ref={myInput2} value={estado1}/>
    //aqui ele referenciou o objeto dentro do input
    //dessa forma podemos controlar o valor, o foco e outras caracteristicas

	useEffect(()=>{
		cont.current = cont.current+1
        myInput2.current.focus()
       
	},[value1])

    useEffect(()=>{
        cont.current = cont.current+1
        myInput1.current.focus()
        if(cont.current>10){
            myInput2.current.value = "Fiquei maior que 10"
        }
    },[value2])

    function merge(value1,value2){

        //o map percorre mapea cada elemento do dastring e gera um array, depois usamos o join pra virar string
        return [...value1].map(function(e,i){
            return e+value2[i] || ""
        }).join("")
    }

    useEffect(()=>{
        
        setValue3(merge(value1,value2))
    },[value2,value1])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"/>
             <SectionTitle title="Exercicio -1"/>
            <div className="center">
            <div>
            <span className="text">valor:</span>
            <span className="text red">{value1}</span>
            </div>
            <div>
            <span className="text">atualizado:</span>
            <span className="text red">{cont.current}</span>
            </div>
            <input type="text" className="input" value={value1} ref={myInput1} onChange={(e)=>setValue1(e.target.value)}/>
            </div>

             <SectionTitle title="Exercicio -2"/>
             <div className="center">
             <input tupe="text" className="input" value={value2} ref={myInput2} onChange={(e)=>setValue2(e.target.value)}/>
             <span className="text red">{value3}</span>
             </div>
        </div>
    )
}

export default UseRef
