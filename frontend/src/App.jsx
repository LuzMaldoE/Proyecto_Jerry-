import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PagLogin from './paginas/PagLogin'
import PagRegistro from './paginas/PagRegistro'
import { Tarea } from './paginas/Tareas'

function App(){
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>} />
      <Route path='/login' element={<PagLogin/>} />
      <Route path='/registro' element={<PagRegistro/>} />
      <Route path='/tareas' element={<h1>Tareas</h1>}/>
      <Route path='/agregarTarea' element={<Tarea/>}/>
      <Route path='/tarea/:id' element={<h1>Actualiza Tarea</h1>}/>
      <Route path='/perfil' element={<h1>Perfil</h1>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App
