
function Sobre(props) {
    return (
        <h1>Olá {props.nome}. Você tem {props.idade}.</h1>
    )
}

export default function Social(props) {
    return (
        <>
        
            <Sobre nome={props.nome} idade = {props.idade} />
            <h1>Facebook {props.facebook}</h1>
            <h1>Instagram {props.instagram}</h1>
            
        </>
    )
}