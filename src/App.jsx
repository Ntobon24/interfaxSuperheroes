import { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import TituloDeLaPagina from './components/Titulo/TituloDeLaPaginaWeb';
import FetchGet from './FetchGet';
import './BotonesMenu.css';
import Carrusel from './components/Carrusel/Carrusel';
import reeshood from './assets/imagenesCarrusel/reeshood.jpg';
import supergirl from './assets/imagenesCarrusel/supergirl_season_4.jpg';
import spiderwoman from './assets/imagenesCarrusel/spiderwoman.jpg';
import spiderman from './assets/imagenesCarrusel/spiderman.jpg';
import flechaverde from './assets/imagenesCarrusel/flechaverde.jpg';
import flash from './assets/imagenesCarrusel/flash.jpg';
import deadpool from './assets/imagenesCarrusel/deadpool.jpg';
import PaginatedSuperheroes from './components/Pagination/Pagination';

function App() {
  const {data , loading} = FetchGet({url: "http://localhost:8090/api/v1/superheroes"})
  const [showSuperheroes, setShowSuperheroes] = useState(false)
  const [createSuperheroes, setCreateSuperheroes] = useState(false) 
  const [modifySuperheroes, setModifySuperheroes] = useState(false)
  const [deleteSuperheroes, setDeleteSuperheroes] = useState(false)
  
  const imagenes = [
    reeshood,
    supergirl,
    spiderwoman,
    spiderman,
    reeshood,
    flechaverde,
    flash,
    deadpool
  ];

  
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
                {!showSuperheroes && !createSuperheroes && !modifySuperheroes && !deleteSuperheroes && (
                  <section className='carrusel-contenido'>
                    <Carrusel autoPlay= {true}  imagenes = {imagenes}/>
                  </section>
                )}

                {createSuperheroes && 
                    <section className='espacio-contenido'>
                        <Formulario />
                    </section>
                    }
                {showSuperheroes && 
                    <section className='espacio-contenido'>
                        {loading && <p>Cargando...</p>}
                        <PaginatedSuperheroes data={data}/>
                    </section>}
                
            </section>

        </div>
    </main>


  
  
  </>


  );
}

export default App;