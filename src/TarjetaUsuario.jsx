

function TarjetaUsuario(props) {
  console.log(props);
  return (
        
    
      <article>
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
          {props.powers.map((poder, index) => (
            <li key={index}>
              <strong>Name:</strong> {poder.name}<br />
              <strong>Description:</strong> {poder.description}
            </li>
          ))}
        </ul>
      </article>
  

  );
}
export default TarjetaUsuario;