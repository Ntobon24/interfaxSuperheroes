import { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import CampoDeUsuarios from './CampoDeUsuarios';


function App() {
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
    <header>
      <div className="container">
          <span style={{ '--l': "'S'" }}>S</span>
          <span style={{ '--l': "'U'" }}>U</span>
          <span style={{ '--l': "'P'" }}>P</span>
          <span style={{ '--l': "'E'" }}>E</span>
          <span style={{ '--l': "'R'" }}>R</span>
          <span style={{ '--l': "'H'" }}>H</span>
          <span style={{ '--l': "'E'" }}>E</span>
          <span style={{ '--l': "'R'" }}>R</span>
          <span style={{ '--l': "'O'" }}>O</span>
          <span style={{ '--l': "'E'" }}>E</span>
          <span style={{ '--l': "'S'" }}>S</span>
        </div>
    </header>
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
    {showSuperheroes && <CampoDeUsuarios />}
    


  
  
  </>


  );
}

export default App;