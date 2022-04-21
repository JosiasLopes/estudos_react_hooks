import React,{useEffect,useState,useMemo} from 'react'


//podemos usar o context Api para criar dados de contexto que podem ser compartilhados pelos 
//componentes ou por toda a aplicação
//usamos o create context prar criar um contexto e passmos um objeto prar ser compartilgado nesse contexto
export const data ={
	number:1,
	text:"Context API"
}

export const DataContext = React.createContext(data)