//Importado entre { } pq não tem default

import { useState, useEffect } from "react"

//? useEffect - serve para executar uma função sempre que houver mudança no setState

function TimerComponent() {
    //count = 0, alterado pelo setCount
    const [count, setCount] = useState(0)

    //useEffect(f callback, dependencia-lista)
    // = didUpdate e willUnmount dos componentes de classe
    useEffect(()=>{
        //Logo após montagem do componente
        // A cada 1s +1
        const timerId = setInterval(()=>{
            setCount(prevCount => prevCount+1)
        },1000)
        //Ao desmontar primeiro componente
        return () =>{
            clearInterval(timerId)
            console.log('Timer foi zerado')
         }
    },[])
    //Array vazio ^ só vai executar uma vez
    //Se fosse [count] iria executar cada vez que count mudar -- monitoramento
    //Se não tiver nada vai rodar sempre que mudar alguma coisa
    return(
        <>
            <h1>Timer</h1>
            <h2>{count}</h2>
        </>
    )

}

export default TimerComponent