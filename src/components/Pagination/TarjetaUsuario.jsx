
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';



const TarjetaUsuarioInfo = styled.div`

width: 100%;
  text-align: left;
  padding: 16px;
  margin-bottom: 16px;
  
`;


const TarjetaPoderesInfo = styled.div`´


width: 100%;
display: flex;
justify-content: space-between ;
padding: 2px; 
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
        <Typography gutterBottom variant="h5"  color = "black" component="div">
          {props.name}    
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <strong>Age:</strong> {props.age + ' years' + '. '}
          <strong> Description:</strong> {props.description+ '.  '}
          <strong>Nickname:</strong> {props.nickName+ ' '}
          <strong>Suit Color:</strong> {props.suitColor+ ' '}
          </Typography>
          <div className='contenedor-botones'>
          <strong>Powers:</strong>
          <>
            {props.powers.map((poder, idPower) => (
              <TarjetaPoderesInfo key={idPower}>
                <strong>Name:</strong> {poder.name  }
                <strong>Description:</strong> {poder.description }
              </TarjetaPoderesInfo>
            ))}
          </>
        </div>
       
        
      </TarjetaUsuarioInfo>
     
        </CardContent>
      </>
    
  );
}
export default TarjetaUsuario;
