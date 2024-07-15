//Versão do Professor

import { useState, useEffect } from "react"

function NewsUpdater(){
    const [news, setNews]=useState([])
    const [isLoading, setIsLoading]=useState(true) //flag
    const [id, setId] = useState(0)

    useEffect(() =>{

        const fetchNews = async() =>{
            setIsLoading(true)
            //Tratando erro
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
                const data = await response.json()
                setNews(data.slice(id, id+5)) // data.slice(0,5) Pega os primeiros 5; data pega todos
                //Implementar 5 em 5
            }catch(error){
                console.error("Ligue para o suporte", error)
            }
            setIsLoading(false)
        }

        fetchNews()

        const newsId = setInterval(()=>{
            if(id<95){
                setId(prevId => prevId + 5)
            }else{
                setId(0)
            }
        },10000)

        // const interval = setInterval(fetchNews, 10000)

        return () => {
            clearInterval(newsId)
            console.log("Limpou Últimas Notícias Simuladas")
        }
    },[id])

    return(
        <div>
            <h1>Últimas Notícias Simuladas</h1>
            {isLoading? (
                <p>Carregando notícias</p>
            ) :  (
                <ul>
                    {
                        news.map((article)=>(
                            <li kew={article}>{article.id} {article.title}</li>
                        ))}
                </ul>
            )}
        </div>
    )
}

export default NewsUpdater