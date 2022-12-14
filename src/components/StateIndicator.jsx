import React from 'react';
import styled from 'styled-components';
import { useContentData } from '../context/dataContext';
import processingArray from '../utils/processingArray';
import StateItems from './StateItems';

const StateIndicator = () => {
  const [contentData, setContentData, TEM_DATA] = useContentData();
  return (
    <Container>
      {TEM_DATA.map((el) => (
        <StateItems key={el.id} el={el}>
          {el}
        </StateItems>
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
