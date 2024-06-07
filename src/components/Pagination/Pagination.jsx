import { useState } from 'react';
import RowAndColumnSpacing from './GridaPagination';
import styled from 'styled-components';


const BotonesPagination = styled.button`
    width: 100px;
    flex: 1; 
    padding: 8px;
    margin: 30px; 
    background: #280045a6;
    border: 1px solid #f0ffff; 
    color: rgba(255, 255, 255, 0.753);
    font-size: 14px;
    border-radius: 9px;
    cursor: pointer;
    align-content: center ;
    `;
  

const PaginatedDiv = styled.div`
    display: block;
    

`;


const PaginatedSuperheroes = ({ data }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const superheroesPerPage = 4;

  const indexOfLastSuperhero = currentPage * superheroesPerPage;
  const indexOfFirstSuperhero = indexOfLastSuperhero - superheroesPerPage;
  const currentSuperheroes = data ? data.slice(indexOfFirstSuperhero, indexOfLastSuperhero) : [];


  const totalPages = data ? Math.ceil(data.length / superheroesPerPage) : 0;


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
    <PaginatedDiv>
      <RowAndColumnSpacing superheroes={currentSuperheroes} />
      <div className="pagination-buttons">
        <BotonesPagination  onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </BotonesPagination>
        <BotonesPagination onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </BotonesPagination>
      </div>
    </PaginatedDiv>
  );
};

export default PaginatedSuperheroes;
