
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';



const TarjetaUsuarioInfo = styled.div`
  text-align: justify;

`;


function TarjetaUsuario(props) {
  return (
    
      <>
        <CardMedia
          component="img"
          height="50"
          image={props.photoSuper}
          alt="photo of superhero"
        />
        <CardContent>
        <TarjetaUsuarioInfo key={props.idSuper} >
        <Typography gutterBottom variant="h5" component="div">
          {props.name}    
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <strong>Age:</strong> {props.age + ' years '}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <strong> Description:</strong> {props.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <strong>Nickname:</strong> {props.nickName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <strong>Suit Color:</strong> {props.suitColor}
          </Typography>
          <div className='contenedor-botones'>
          Powers: 
          <>
            {props.powers.map((poder, idPower) => (
              <ul key={idPower}>
                <strong>Name:</strong> {poder.name}<br />
                <strong>Description:</strong> {poder.description}
              </ul>
            ))}
          </>
        </div>
       
        
      </TarjetaUsuarioInfo>
     
        </CardContent>
      </>
    
  );
}
export default TarjetaUsuario;
