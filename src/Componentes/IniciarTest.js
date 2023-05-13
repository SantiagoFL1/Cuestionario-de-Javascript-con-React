import { NavLink } from "react-router-dom";

const IniciarTest = () => {
    return ( 
        
        <div className='IniciarTest'>

                <h2>Test</h2>
                <h4>El test consiste en 10 preguntas tomadas al azar de una lista, y deben ser respondidas en menos de diez minutos</h4>
                <NavLink className='link' to='test'> Comenzar test</NavLink>

        </div>
    
    );
}
 
export default IniciarTest;