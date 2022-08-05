import {useState} from 'react'

function Form() {

    function cadastrar(e) {
        e.preventDefault()
        alert('Cadastrado!')
        alert(name)
        alert(password)
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={cadastrar}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="name" placeholder="Digite seu Nome" onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password" placeholder="Digite sua Senha" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Cadastrar"/>
            </div>
            </form>
        </div>
    )
}

export default Form