import {Link} from 'react-router-dom'
export default function Pagina404(){
    return(
        <main className="conteudo">
            <h1>Ops! Pagina não encontrada (400)ERROR 404</h1>
            <p>O caminho que você tentou acessar não existe no BikeOn App.</p>
            <Link to="/">Voltar para a página inicial</Link>
           

        </main>
    )
}