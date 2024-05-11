import FetchGet from './FetchGet';
import TarjetaUsuario from './TarjetaUsuario';

function CampoDeUsuarios() {
  return (
    <section>
      <h1>SuperHeroes</h1>
      <FetchGet url="http://localhost:8090/api/v1/superheroes">
        {data =>
          data.map(superheroe => (<TarjetaUsuario 
            photoSuper={superheroe.photoSuper}
            age={superheroe.age}
            description={superheroe.description}
            name={superheroe.name}
            nickName={superheroe.nickName}
            suitColor={superheroe.suitColor}
            powers={superheroe.powers} />))
        }
      </FetchGet>
    </section>
  );
}

export default CampoDeUsuarios;