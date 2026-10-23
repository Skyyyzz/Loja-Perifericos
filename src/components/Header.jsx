import {Link} from 'react-router-dom'
import imglogo from '../assets/PcStore.png'
import '../styles/header.css'

export default function Header(){
    return(
        <header className="cabecalho">
            <img src={imglogo} alt="Logo da loja" className='imglogo' />
            
            <nav className='menu'>
                <ul>
                    <li><Link to="/">Home</Link ></li>
                    <li><Link to="/produtos">Produtos</Link ></li>
                    <li><Link to="/categorias">Categoria</Link ></li>
                    <li><Link to="/carrinho">Carrinho</Link ></li>
                    <li><Link to="/minhaconta">Minha Conta</Link ></li>
                </ul>
            </nav>

        </header>
    )
}