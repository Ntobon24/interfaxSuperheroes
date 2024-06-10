import { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 15px;
  flex-direction: row; 
`;

const CarruselImg = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const BotonesCarrusel = styled.button`
  flex: 1; 
  padding: 8px;
  margin: 0 5px;
  border: solid 1px #000;
`;

export default function Carrusel({ autoPlay, imagenes }) {
  const [selectedIndex, setSelectedIndex] = useState(0);  
  const [selectImagen, setSelectImagen] = useState(imagenes && imagenes.length > 0 ? imagenes[0] : null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        selectNewImage(imagenes, true);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, imagenes, selectedIndex]);

  const selectNewImage = (imagenes, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      let nextIndex;
      if (next) {
        nextIndex = selectedIndex < imagenes.length - 1 ? selectedIndex + 1 : 0;
      } else {
        nextIndex = selectedIndex > 0 ? selectedIndex - 1 : imagenes.length - 1;
      }

      setSelectImagen(imagenes[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(imagenes, false);
  };

  const next = () => {
    selectNewImage(imagenes, true);
  };

  return (
    <>
      {selectImagen && (
        <CarruselImg
          src={selectImagen}
          alt="Gentleman"
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
      )}
      <CarouselButtonContainer>
        <BotonesCarrusel onClick={previous}>Anterior</BotonesCarrusel>
        <BotonesCarrusel onClick={next}>Siguiente</BotonesCarrusel>
      </CarouselButtonContainer>
    </>
  );
}
