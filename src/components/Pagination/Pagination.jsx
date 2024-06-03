import { useState } from 'react';
import RowAndColumnSpacing from './GridaPagination';
 
const PaginatedSuperheroes = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const superheroesPerPage = 4;

  const indexOfLastSuperhero = currentPage * superheroesPerPage;
  const indexOfFirstSuperhero = indexOfLastSuperhero - superheroesPerPage;
  const currentSuperheroes = data.slice(indexOfFirstSuperhero, indexOfLastSuperhero);

  const totalPages = Math.ceil(data.length / superheroesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='contenedor-grida-botones'>
      <RowAndColumnSpacing superheroes={currentSuperheroes} />
      <div className="pagination-buttons">
        <button className= "botones-pagination" onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button className= "botones-pagination"  onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedSuperheroes;
