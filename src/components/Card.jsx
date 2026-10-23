
import '../styles/Card.css'
function Card(props) {
    return (
        <div className='card-produtos'>
            <h2 className='card-titulo'>{props.titulo}</h2>
            <img className='card-img' src={props.imagem} alt={props.titulo} />
            <p className='card-descricao'>{props.descricao}</p>
            <p className='card-preco'>{props.preco}</p>
            <button
                className='btn-card'
                onClick={() => {
                    props.onComprar(props.titulo)
                }}
            >
                Comprar
            </button>

        </div>
    )
}

export default Card
