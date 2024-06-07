import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TarjetaUsuario from './TarjetaUsuario'; // Asegúrate de que la ruta sea correcta

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function RowAndColumnSpacing({ superheroes }) {
  return (
    <Box sx={{ minWidth: '100%', maxWidth: '800px'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {superheroes.map((superheroe, index) => (
          <Grid item xs={6} key={index}>
            <Item>
              <TarjetaUsuario 
                key={superheroe.idSuper}
                photoSuper={superheroe.photoSuper}
                age={superheroe.age}
                description={superheroe.description}
                name={superheroe.name}
                nickName={superheroe.nickName}
                suitColor={superheroe.suitColor}
                powers={superheroe.powers} 
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RowAndColumnSpacing;
