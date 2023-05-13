import { useState } from 'react';


const ListaPreguntas = require('../Preguntas/preguntas')

let Correctas = 0
let Incorrectas = 0

export default function ComponentePregunta  ({PreguntasRespondidas , Respuestas})  {
    
    
        
    const [indicePregunta , setIndicePregunta] = useState(Math.round(Math.random()*(ListaPreguntas.length-1)))
       
    let Pregunta
    let Respuesta

    

    const [TestFinalizado , setTestFinalizado] = useState(false)
    
    //Asignar nuevo orden a las posibles respuestas

    let PreguntasAgregadas = []
    let IndicesOriginales = []
    let NuevoOrdenPosibilidades = []

    for (let i = 0 ; i <= 3 ; i++) {
        do {
            Pregunta = Math.round(Math.random()*3)
        }
        while (PreguntasAgregadas.includes(Pregunta))
        
        NuevoOrdenPosibilidades.push(ListaPreguntas[indicePregunta].posibilidades[Pregunta])
        PreguntasAgregadas.push(Pregunta)
        IndicesOriginales.push(ListaPreguntas[indicePregunta].posibilidades.indexOf(Pregunta))
    }

        const confirmar =s=>{
            s.preventDefault()
            
            if(Respuesta===undefined) {
                alert('Indique una respuesta antes de continuar')
                return
            }
           
            Respuesta.RtaElegida===ListaPreguntas[indicePregunta].respuesta ? Correctas++ : Incorrectas++
            
            console.log(Correctas , Incorrectas)

            Respuestas.push(Respuesta)
            console.log(Respuestas)
            PreguntasRespondidas.push(indicePregunta)   
            let indice
            do {
                indice = Math.round(Math.random()*(ListaPreguntas.length-1))
             
            }
            while(PreguntasRespondidas.includes(indice))

            if (PreguntasRespondidas.length===5) {
                setTestFinalizado(true)
                console.log(TestFinalizado)
                return
            }

            
            for (let i = 0 ; i < 4 ; i++) {
                
                document.getElementsByTagName('input')[i].checked=false
            }

            setIndicePregunta(indice)


        }


    function HandleCheck (a) {
        for (let i = 0 ; i < 4 ; i++) {
            i===a ? document.getElementsByTagName('input')[i].checked=true : document.getElementsByTagName('input')[i].checked=false;
        }

        Respuesta = {
            indicePregunta : indicePregunta,
            RtaElegida : NuevoOrdenPosibilidades[a],
        }
        
    }


        return ( 
            <div>
               {TestFinalizado && 
                <div className='TestFinalizado'> 
                    <h1>Test finalizado</h1>     
                    <h3>Acertaste el {Correctas / (Correctas+Incorrectas) *100}% </h3>
                    <p>{Correctas} Correctas</p>
                    <p>{Incorrectas} Incorrectas</p>
                </div>

               } 

              { !TestFinalizado && < div className='ComponentePregunta' >
                <div>
                    {ListaPreguntas[indicePregunta].pregunta}
                        
                    
                    {ListaPreguntas[indicePregunta].lineas.map(linea=>(
                        <p key={ListaPreguntas[indicePregunta].lineas.indexOf(linea)} >{linea}</p>
                        
                    ))
                    }
                    
                </div>
                    <div>
                        <form onSubmit={confirmar}>
                            <p> <input type='radio' onClick={()=>HandleCheck(0)}/> {NuevoOrdenPosibilidades[0]} </p> 
                            <p> <input type='radio' onClick={()=>HandleCheck(1)}/> {NuevoOrdenPosibilidades[1]} </p> 
                            <p> <input type='radio' onClick={()=>HandleCheck(2)}/> {NuevoOrdenPosibilidades[2]} </p> 
                            <p> <input type='radio' onClick={()=>HandleCheck(3)}/> {NuevoOrdenPosibilidades[3]} </p> 
                            <button type='submit' >Confirmar</button>
                        </form>
                    </div>
                  
                </div> }
            </div>
        );
}
 
