import React,{useEffect,useState,useMemo} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle.jsx'


const UseMemo = (props) => {


	//o use memo cria uma espeie de cash

	console.log("renderizei o componete useMEmo")

	const [num1,setNum1] = useState(0)
	const [num2,setNum2] = useState(0)
	const [num3,setNum3] = useState(0)

	function sum(a,b){
		const future = Date.now()+2000
		while(Date.now()<future){}
		return a+b
	}

	//vemos que pra cada mudança no input temos que esperara 2 segundos(mesmo o estado num3 que não tem nada a ver)
	//const soma = sum(num1,num2)

	//pra arrumar isso temos duas alternativas, usar o useMemo, ou usar o useState com useEffect
	//vamos usar primerio o useSatte e useEffect
	//const[soma, setSoma] = useState(0)

	//aqui esse efeito de lentidão é consertado por que a função sum esta recebendo os valores corretos que estão na
	//dependencia fazendo com que o re-render ocorra so quando o estado mudar
	//useEffect(
	//	()=>{
	//		setSoma(sum(num1,num2))
	//	},[num1,num2]
	//	)

   //vamos usar agora o hook useMemo pra gerir o mesmo effeito
   //assim como o useEffect ele tem uma função como parametro1 e um vetor das depencias no parameto 2
   //a função sum so vai ocorrer quando os valores das dependecias forem alterados
    const soma = useMemo(()=>sum(num1,num2),[num1,num2])
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"/>

            <SectionTitle title="Sobre o use memo"/>
            <div className="center">
            <input type="number" className="input" value={num1} onChange={(e)=>setNum1(parseInt(e.target.value))}/>
            <input type="number" className="input" value={num2} onChange={(e)=>setNum2(parseInt(e.target.value))}/>
            <input type="number" className="input" value={num3} onChange={(e)=>setNum3(parseInt(e.target.value))}/>
            <span className="text">{soma}</span>
            </div>
        </div>
    )
}

export default UseMemo
