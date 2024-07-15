//Desafio 1: Atualizador Automático de Notícias
//Implemente um componente que busca automaticamente novas notícias a cada 30s usando useEffect

//Importação dos hooks useState e useEffect do React
import { useState, useEffect } from "react"

function News() {
    //count = 0, alterado pelo setCount
    const [news, setNews] = useState(null)
    const [id, setId] = useState(1)

    //useEffect(f callback, dependencia-lista)
    // = didUpdate e willUnmount dos componentes de classe
    useEffect(()=>{
        //Logo após montagem do componente
        const newsId = setInterval(()=>{
            if(id<100)
                setId(prevId => prevId + 1)
            else
                setId(1)
        },5000)

        const fetchNewsData = async () =>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const newsData = await response.json()
            setNews(newsData)
        }
        fetchNewsData()

        //Ao desmontar primeiro componente
        //Quando for desmontado - A função de limpeza é retornada e será chamada quando o componente for desmontado
        return () => {
            clearInterval(newsId)
            console.log("Limpou ID News")
        }
    },[id])

    return(
        <div>
        {/* Se 'user' não for null, exibe dados da notícia */}
        {news ? (
            <div>
                <h1>Latest News</h1>
                <p>ID: {news.id}</p>
                <h2>{news.title}</h2>
                <p>{news.body}</p>
            </div>
        ) :(
             // Caso contrário, exibe uma mensagem de carregamento
            <div>
                <h1>Latest News</h1>
                <p>ID: Carregando Notícia</p>
                <h2>Title</h2>
                <p>Body</p>
            </div>
        )}
    </div>
    )

}

export default News