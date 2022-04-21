import React,{useState,useCallback} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle.jsx'

 const CallbackButton = (props)=>{


//quando usamos REact.memo dizemos verificamos se o parametro do useMEmo é o mesmo
//se for ele não renderiza esse componente novamente por que é criado um cash
//é util para performance
//o inc é aumentado pois ele recebe o state do componente pai atrave da props
	console.log("render...")
    return (
       
        <div className="center">
        <div>
        <button className="btn" onClick={()=>props.inc(6)}>+6</button>
        <button className="btn" onClick={()=>props.inc(12)}>+12</button>
        <button className="btn" onClick={()=>props.inc(18)}>+18</button>
        </div>
        </div>
       
    )
} 
export default React.memo(CallbackButton)