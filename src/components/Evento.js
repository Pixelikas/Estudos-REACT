import Button from './eventos/Button'

function Evento(){

    function meuEvento(){

        console.log(`Ativando primeiro evento! :D`)

    }

    function segundoEvento(){

        console.log(`Ativando segundo evento! :D`)

    }

    return(

        <div>

            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />

        </div>

    )

}

export default Evento