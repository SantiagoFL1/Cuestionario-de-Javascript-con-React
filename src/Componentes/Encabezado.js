import { Outlet } from "react-router-dom";

const Encabezado = () => {
    return ( 
        <div>
            <header>
                <h1>Test de conocimientos de JavaScript</h1>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default Encabezado;