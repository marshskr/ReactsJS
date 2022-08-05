function Evento() {

    function meuEvento() {
        alert('ATIVADO!')
    }

    return(
        <div>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento