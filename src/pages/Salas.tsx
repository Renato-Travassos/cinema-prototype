import Sala_designer from "../assets/Sala_designer"



export default function Salas() {
    return(
        <>
        <h2>Salas</h2>
        <Sala_designer letra={['A','B','C','D','E','F']} numero_assentos={[8,8,10,9,10,10]} sala_numero={1}/>
        </>
    )
}