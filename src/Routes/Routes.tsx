import { BrowserRouter, Routes, Route, Link,NavLink } from 'react-router-dom';
import Salas from '../pages/Salas';
import Filmes from '../pages/Filmes';
import Inicio from '../pages/Inicio';
import { AiTwotoneVideoCamera,AiFillHome,AiFillFolder,AiOutlineMenu} from 'react-icons/ai';
import { MdChair} from 'react-icons/md'; 
import { useState } from 'react';
export default function App_routes() {

 
    return(        
        <BrowserRouter>
        <button onClick={() => {
    const barra = document.querySelector('.barra_');
    barra?.classList.toggle('show');
  }}>
  <AiOutlineMenu />
</button>
        <nav className='barra_' >
  
        <Link to="/"> <AiFillHome/> ínicio</Link>  
        <Link to="/Salas"><MdChair/> Salas</Link>  
        <Link to="/Filmes"> <AiTwotoneVideoCamera/>Filmes</Link>
        <Link to="/Relatorio">         <AiFillFolder/>Relatorio</Link>       

        </nav>

<Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Salas" element={<Salas />} />
        <Route path="/Filmes" element={<Filmes />} />
        <Route path="*" element={<Inicio />} />

      </Routes>        
        </BrowserRouter>        
    )
}