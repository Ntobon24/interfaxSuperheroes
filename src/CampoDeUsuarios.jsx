import TarjetaUsuario from './TarjetaUsuario';
function CampoDeUsuarios({data}) {
  
  return (
    <>
      {data?.map(superheroe => (<TarjetaUsuario 
            key={superheroe.idSuper}
            photoSuper={superheroe.photoSuper}
            age={superheroe.age}
            description={superheroe.description}
            name={superheroe.name}
            nickName={superheroe.nickName}
            suitColor={superheroe.suitColor}
            powers={superheroe.powers} />))
        }
    </>
  );
}

export default CampoDeUsuarios;