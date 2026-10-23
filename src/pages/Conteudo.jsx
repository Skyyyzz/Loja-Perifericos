import Card from '../components/Card'
import Caixa from '../components/Caixa'
import Vitrine from '../components/Vitrine'

import Gpro from '../assets/gpro.png'
import atk_a9 from '../assets/atk_a9.png'
import atk_roxo from '../assets/atk_roxo.png'
import atk_rosa from '../assets/atk_rosa.png'
import aula from '../assets/aula.png'
import headset_1 from '../assets/headset_1.png'
import headset_2 from '../assets/headset_2.png'
import headset_3 from '../assets/headset_3.png'
import headset_4 from '../assets/headset_4.png'
import k86 from '../assets/k86.png'
import teclado_branco from '../assets/teclado_Branco.png'
import teclado_preto_branco from '../assets/teclado_preto_branco.png'
import teclado_verde from '../assets/teclado_verde.png'
import teclado_vermelho from '../assets/teclado_vermelho.png'
import teclado from '../assets/teclado.png'
import microfone1 from '../assets/microfone_1.png'
import microfone2 from '../assets/microfone_2.png'
import microfone3 from '../assets/microfone_3.png'
import microfone4 from '../assets/microfone_4.png'

export default function Conteudo() {
    function lidarComCompra(nomeDoCarro) {
        alert("Voce adicionou ao carrinho: " + nomeDoCarro)
    }
    return (
        <main>

            <h1>Conteúdo</h1>

            <section>
                <h2>Informações</h2>
                <button>Acessar</button>
            </section>

            <section
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap"
                }}
            >

                <Card
                    titulo="Gpro Superlight"
                    imagem={Gpro}
                    descricao="Mouse gamer"
                    preco="R$ 800,00"
                    onComprar={lidarComCompra}

                />

                <Card
                    titulo="Attack Shark"
                    imagem={atk_a9}
                    descricao="Atk Dragonfly"
                    preco="R$ 250,00"
                    onComprar={lidarComCompra}
                />

                <Card
                    titulo="Attack Shark"
                    imagem={atk_rosa}
                    descricao="Atk Dragonfly Starlight"
                    preco="R$ 350,00"
                    onComprar={lidarComCompra}
                />

                <Card
                    titulo="Attack Shark"
                    imagem={atk_roxo}
                    descricao="Atk Skyassault Purple"
                    preco="R$ 700,00"
                    onComprar={lidarComCompra}
                />

                <Card
                    titulo="Attack Shark"
                    imagem={teclado_branco}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={teclado}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={teclado_preto_branco}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={teclado_verde}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={teclado_vermelho}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={headset_1}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={headset_2}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={headset_3}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={headset_4}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={microfone1}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={microfone2}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={microfone3}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={microfone4}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                <Card
                    titulo="Attack Shark"
                    imagem={k86}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />
                
                <Card
                    titulo="Attack Shark"
                    imagem={aula}
                    descricao="Teclado Attack Shark R85he"
                    preco="R$ 300,00"
                    onComprar={lidarComCompra}
                />




            </section>
            <section>
                <Caixa />
            </section>

            <section>
                <Vitrine />
            </section>

        </main>
    )
}


