import './TarjetaUsuario.css';

function TarjetaUsuario(props) {
  return (
    <article className="tarjeta-info">
      <li key={props.idSuper} className="tarjeta-usuario-info">
        <img
          className="tarjeta-usuario-foto"
          src={props.photoSuper}
          alt={`Foto de ${props.name}`}
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
