import { Menu } from './componentes/Menu/menu.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Bienvenida } from './componentes/bienvenida/bienvenida.jsx'
import { Trabajo1 } from './trabajos/trabajo 1/trabajo1.jsx'
import { Inicio } from "./componentes/Pagina inicial/inicio.jsx"
import { Trabajo2 } from './trabajos/trabajo 2/trabajo2.jsx'
import { Trabajo3 } from './trabajos/trabajo 3/trabajo3.jsx'
import { Trabajo4 } from './trabajos/trabajo4/trabajo4.jsx'
import { Trabajo5 } from './trabajos/trabajo 5/trabajo5.jsx'
import { Trabajo6 } from './trabajos/trabajo 6/trabajo6.jsx'
function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Inicio />
        <Routes>
          <Route path='/trabajos/1' element={<Trabajo1 />}></Route>
          <Route path='/trabajos/2' element={<Trabajo2 />}></Route>
          <Route path='/trabajos/3' element={<Trabajo3 />}></Route>
          <Route path='/trabajos/4' element={<Trabajo4 />}></Route>
          <Route path='/trabajos/5' element={<Trabajo5 />}></Route>
          <Route path='/trabajos/6' element={<Trabajo6 />}></Route>
          <Route path='/' element={<Bienvenida />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
