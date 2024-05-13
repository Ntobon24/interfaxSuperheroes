import { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Header from './Header';
import FetchGet from './FetchGet';
import CampoDeUsuarios from './CampoDeUsuarios';

function App() {
  const {data , loading} = FetchGet({url: "http://localhost:8090/api/v1/superheroes"})
  const [showSuperheroes, setShowSuperheroes] = useState(false)
  const [createSuperheroes, setCreateSuperheroes] = useState(false) 
  const [modifySuperheroes, setModifySuperheroes] = useState(false)
  const [deleteSuperheroes, setDeleteSuperheroes] = useState(false)
  
  const getButtonText = (showState, text1, text2) => {
    return showState ? `${text2}` : `${text1}`;
};
  const toggleShowSuperheroes = () => {
        setShowSuperheroes(!showSuperheroes);
    };
  const toggleCreateSuperheroes = () => {
        setCreateSuperheroes(!createSuperheroes);
    };
  const toggleModifySuperheroes = () => {
          setModifySuperheroes(!modifySuperheroes);
    };
  const toggleDeleteSuperheroes = () => {
          setDeleteSuperheroes(!deleteSuperheroes);
    };


  const getButtonClassName = (showState) => {
    return showState ? 'boton-menu presionado' : 'boton-menu';
};




  return (  
  <>
    <Header/> 
    
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
    {createSuperheroes && <Formulario />}
    {showSuperheroes && 
    <article className='informacionSuperheroes'>
      {loading && <p>Cargando...</p>}
      <CampoDeUsuarios data={data}/>
    </article>}


  
  
  </>


  );
}

export default App;