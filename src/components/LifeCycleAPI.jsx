import { useState, useEffect } from "react"

function UserProfile(){
    const [user, setUser] = useState()
    const [id, setId] = useState(1)

    // useEffect configura um efeito que busca dados do usuário de uma API.
    // Dentro do useEffect, é definida uma função assíncrona fetchUserData que faz uma requisição fetch para obter dados do usuário e 
    //atualiza o estado user com os dados recebidos.
    // A função fetchUserData é chamada imediatamente após sua definição.
    // Retorna uma função de limpeza que será executada quando o componente for desmontado, limpando o estado user com setUser(null).
    // O array vazio [] como segundo argumento indica que o efeito só deve ser executado uma vez, após a montagem do componente.
    useEffect(()=>{
        //Quando for montado
        // Define uma função assíncrona para buscar dados do usuário
        const userId = setInterval(()=>{
            // setId(Math.floor(Math.random()*10)+1)
            if(id < 10)
                setId(prevId => prevId+1)
            else
                setId(1)

        },5000)

        const fetchUserData = async () =>{
            // Faz uma requisição para a API e espera pela resposta
            // fetch = ajax 'moderno', "pegar"
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
             // Converte a resposta em JSON
            const userData = await response.json()
            // Atualiza o estado 'user' com os dados recebidos
            setUser(userData)
        }
        fetchUserData()
        //Quando for desmontado - A função de limpeza é retornada e será chamada quando o componente for desmontado
        return () => {
            clearInterval(userId)
            setUser(null)
            console.log("Limpou ID User")
        }
    },[id]) // O array vazio como segundo argumento garante que o efeito só será executado uma vez, após a montagem do componente

     // Renderiza o conteúdo do componente
    return(
        <div>
            {/* Se 'user' não for null, exibe os dados do usuário */}
            {user ? (
                <div>
                    <h1>User Data</h1>
                    <p>ID: {user.id}</p>
                    <h2>Name: {user.name}</h2>
                    <h2>Email: {user.email}</h2>
                </div>
            ) :(
                 // Caso contrário, exibe uma mensagem de carregamento
                 <div>
                    <h1>User Data</h1>
                    <p>ID: Carregando Usuário</p>
                    <h2>Name: </h2>
                    <h2>Email: </h2>
                </div>
            )}
        </div>
    )

}
export default UserProfile