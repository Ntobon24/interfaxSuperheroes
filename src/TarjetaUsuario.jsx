

function TarjetaUsuario(props) {
  return (
        
      <article>
        <li key={props.idSuper}>
        <img
          className='tarjeta-usuario-foto'
          src={props.photoSuper}
        />
        

        <p>Age: {props.age}</p>
        <p>Description: {props.description}</p>
        <p>Name: {props.name}</p>
        <p>Nickname: {props.nickName}</p>
        <p>Suit Color: {props.suitColor}</p>
        <h3>Powers:</h3>
        <ul>
          {props.powers.map((poder, idPower) => (
            <li key={idPower}>
              <strong>Name:</strong> {poder.name}<br />
              <strong>Description:</strong> {poder.description}
            </li>
          ))}
        
        </ul>
        </li>
      </article>
  

  );
}
export default TarjetaUsuario;