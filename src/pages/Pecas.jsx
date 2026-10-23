//importando o useState
import { useState } from 'react'
//importando a base de dados das peças/periféricos
import { listaPecas } from '../data/pecasData.js'
import '../styles/Pecas.css'

export default function Pecas() {
    //criar estado para o clique do botão
    const [carrinho, setCarrinho] = useState([])

    function adicionarCarrinho(peca) {
        setCarrinho([...carrinho, peca])
        console.log(`Peça ${peca.nome} adicionada ao carrinho`)
        alert(`Peça ${peca.nome} adicionada ao carrinho`)
    }

    return (
        <main className="container">
            <h1>Periféricos de alta performance</h1>
            <p className="pecas-subtitulo">Encontre os melhores componentes e acessórios para o seu setup.</p>
            <div className="pecas-container">
                {listaPecas.map((peca) => (
                    <div key={peca.id} className="peca-card">
                        <div className="peca-info-grupo">
                            <img src={peca.foto} alt={peca.nome} className='peca-imagem' />
                            <div>
                                <h3 className="peca-nome">{peca.nome}</h3>
                                <p className="peca-preco">{peca.preco}</p>
                            </div>
                        </div>
                        <button
                            className="peca-botao"
                            disabled={!peca.estoque}
                            onClick={() => adicionarCarrinho(peca)}
                        >
                            {peca.estoque ? "Adicionar" : "Esgotado"}
                        </button>
                    </div>
                ))}
            </div>
        </main>
    )
}