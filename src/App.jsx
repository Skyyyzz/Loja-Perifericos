import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'
import Conteudo from './pages/Conteudo'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import Carrinho from './pages/Carrinho'
import Produtos from './pages/Produtos'
import Minhaconta from './pages/Minha_conta'
import Pagina404 from './pages/Pagina404'
import Pecas from './pages/Produtos'

import './styles/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Header />
        <Pecas />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categorias' element={<Categorias />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/minhaconta' element={<Minhaconta />} />
          <Route path='*' element={<Pagina404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}