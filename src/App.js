
import './App.css';

import {createRoutesFromElements , createBrowserRouter , RouterProvider , Route} from 'react-router-dom'

import Encabezado from './Componentes/Encabezado';
import IniciarTest from './Componentes/IniciarTest';
import ComponentePregunta from './Componentes/ComponentePregunta';


function App() {
  let PreguntasRespondidas = []
  let Respuestas = []

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Encabezado/>}>
        <Route index element={<IniciarTest/>} />
        <Route path='test' element={<ComponentePregunta PreguntasRespondidas={PreguntasRespondidas} Respuestas={Respuestas}/>} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <header>
        <h1>Test de conocimientos de JavaScript</h1>
      </header>     
      <ComponentePregunta/> */}
    </div>
  );
}

export default App;
