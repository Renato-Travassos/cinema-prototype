import { BrowserRouter, Routes, Route, Link,NavLink } from 'react-router-dom';
import Cadeiras from '../pages/Cadeiras';
import Filmes from '../pages/Filmes';
import Inicio from '../pages/Inicio';
 

export default function App_routes() {
    return(        
        <BrowserRouter>
        <nav>

        <Link to="/" className='selecionado'>  ínicio</Link>  
        <Link to="/Cadeiras">Cadeiras</Link>  
        <Link to="/Filmes">Filmes</Link>

        </nav>

<Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Cadeiras" element={<Cadeiras />} />
        <Route path="/Filmes" element={<Filmes />} />
        <Route path="*" element={<Inicio />} />

      </Routes>        
        </BrowserRouter>        
    )
}