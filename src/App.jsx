import { Menu } from './componentes/Menu/menu.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Bienvenida } from './componentes/bienvenida/bienvenida.jsx'
import { Trabajo1 } from './trabajos/trabajo 1/trabajo1.jsx'
import { Inicio } from "./componentes/Pagina inicial/inicio.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Inicio />
        <Routes>
          <Route path='/trabajos/1' element={<Trabajo1 />}></Route>
          <Route path='/' element={<Bienvenida />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
