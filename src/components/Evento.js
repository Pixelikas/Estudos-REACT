function Evento({numero}){

    function meuEvento(){

        console.log(`Opa, fui ativado! :D ${numero}`)

    }

    return(

        <div>

            <p>Clique para ativar</p>
            <button onClick={meuEvento}>Ativar</button>

        </div>

    )

}

export default Evento