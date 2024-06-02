import { useState } from 'react';

// Importar imágenes de manera estática
import reeshood from './assets/imagenesCarrusel/reeshood.jpg';
import supergirl from './assets/imagenesCarrusel/supergirl_season_4.jpg';
import spiderwoman from './assets/imagenesCarrusel/spiderwoman.jpg';
import spiderman from './assets/imagenesCarrusel/spiderman.jpg';
import flechaverde from './assets/imagenesCarrusel/flechaverde.jpg';
import flash from './assets/imagenesCarrusel/flash.jpg';
import deadpool from './assets/imagenesCarrusel/deadpool.jpg';

const imagenes = [
    reeshood,
    supergirl,
    spiderwoman,
    spiderman,
    reeshood,
    flechaverde,
    flash,
    deadpool
];

export default function Carrusel() {
    const [selectedIndex, setSelectedIndex] = useState(0);  
    const [selectImagen, setSelectImagen] = useState(imagenes[0]);

    const selectNewImage = (next = true) => {
        const condition = next ? selectedIndex < imagenes.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : imagenes.length - 1);

        setSelectImagen(imagenes[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const previous = () => {
        selectNewImage(false);
    };

    const next = () => {
        selectNewImage(true);
    };

    return (
        <>
            <img src={selectImagen} alt="Imagen de carrusel" />
            <button onClick={previous}>Anterior</button>
            <button onClick={next}>Siguiente</button>    
        </>
    );
}
