import { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import TituloDeLaPagina from './TituloDeLaPaginaWeb';
import FetchGet from './FetchGet';
import CampoDeUsuarios from './CampoDeUsuarios';
import './BotonesMenu.css';
import Carrusel from './Carrusel';

function App() {
  const {data , loading} = FetchGet({url: "http://3.142.251.202:8090/api/v1/superheroes"})
  const [showSuperheroes, setShowSuperheroes] = useState(false)
  const [createSuperheroes, setCreateSuperheroes] = useState(false) 
  const [modifySuperheroes, setModifySuperheroes] = useState(false)
  const [deleteSuperheroes, setDeleteSuperheroes] = useState(false)
  
  const getButtonText = (showState, text1, text2) => {
    return showState ? `${text2}` : `${text1}`;
};
  const toggleShowSuperheroes = () => {
        setShowSuperheroes(!showSuperheroes);
        setCreateSuperheroes(false);
        setDeleteSuperheroes(false);
        setModifySuperheroes(false);

    };
  const toggleCreateSuperheroes = () => {
        setCreateSuperheroes(!createSuperheroes);
        setShowSuperheroes(false);
        setDeleteSuperheroes(false);
        setModifySuperheroes(false);
    };
  const toggleModifySuperheroes = () => {
          setModifySuperheroes(!modifySuperheroes);
          setCreateSuperheroes(false);
          setDeleteSuperheroes(false);
          setShowSuperheroes(false);
    };
  const toggleDeleteSuperheroes = () => {
          setDeleteSuperheroes(!deleteSuperheroes);
          setCreateSuperheroes(false);
          setModifySuperheroes(false);
          setShowSuperheroes(false);  
          
    };


  const getButtonClassName = (showState) => {
    return showState ? 'boton-menu presionado' : 'boton-menu';
};




  return (  
  <>
    <main>
        <header>
          <TituloDeLaPagina/> 
            
        </header>
        <div className='contenidoPagina'>
            <aside className='menu'>
              <button className={getButtonClassName(showSuperheroes)} onClick={toggleShowSuperheroes}>
                {getButtonText(showSuperheroes, 'Mostrar Superheroes','Mostrando Superheroes' )}
              </button>
              <button className={getButtonClassName(createSuperheroes)} onClick={toggleCreateSuperheroes}>
                {getButtonText(createSuperheroes, 'Crear Superheroes', 'Creando Superheroes')}
              </button>
              <button className={getButtonClassName(modifySuperheroes)} onClick={toggleModifySuperheroes}>
                {getButtonText(modifySuperheroes, 'Modificar Superheroes', 'Modificando Superheroes')}
              </button>
              <button className={getButtonClassName(deleteSuperheroes)} onClick={toggleDeleteSuperheroes}>
                {getButtonText(deleteSuperheroes, 'Eliminar Superheroes', 'Eliminando Superheroes')}
              </button>
      
            </aside>
            <section className='contenidoDentroDeLaPagina'> 
                <section className='espacio-contenido'>
                    <Carrusel/>
                </section>

                {createSuperheroes && 
                    <section className='espacio-contenido'>
                        <Formulario />
                    </section>
                    }
                {showSuperheroes && 
                    <section className='espacio-contenido'>
                        {loading && <p>Cargando...</p>}
                        <CampoDeUsuarios data={data}/>
                    </section>}
                
            </section>

        </div>
    </main>


  
  
  </>


  );
}

export default App;