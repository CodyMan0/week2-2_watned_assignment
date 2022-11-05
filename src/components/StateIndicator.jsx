import React from 'react';
import styled from 'styled-components';
import StateItems from './StateItems';

const StateIndicator = () => {
  const TEM_DATA = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      {TEM_DATA.map((el) => (
        <StateItems key={el}>{el}</StateItems>
      ))}
    </Container>
  );
};

export default StateIndicator;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 10px;
  padding: 18px 40px;
  width: auto;
  height: auto;
`;
