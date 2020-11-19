import React from 'react';
import styled from 'styled-components';
import NextIcon from '../../assets/icons/grey-right-arrow.svg';
import PrevIcon from '../../assets/icons/grey-left-arrow.svg';
import PropTypes from 'prop-types';
const PaginatorStyled = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 40px 0;
`;

const PaginatorArrow = styled.button`
  outline: none;
  cursor: pointer;
  display: inline-block;
  border: none;
  background-color: white;
  padding-top: 5px;
`;

const PaginatorText = styled.p`
  display: inline-block;
  margin: 0 30px;
  font-size: 16px;
`;

const Paginator = ({ goNext, goBack, currentPage, totalPages, totalHomes }) => (
  <PaginatorStyled>
    <PaginatorArrow>{currentPage > 1 && <PrevIcon onClick={() => goBack()} />}</PaginatorArrow>
    <PaginatorText>1 a 12 de {totalHomes}</PaginatorText>
    <PaginatorArrow>
      {currentPage !== totalPages && <NextIcon onClick={() => goNext()} />}
    </PaginatorArrow>
  </PaginatorStyled>
);

Paginator.propTypes = {
  goNext: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalHomes: PropTypes.number.isRequired,
};

export default Paginator;
