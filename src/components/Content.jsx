import React from 'react';
import styled from 'styled-components';
import { useOption } from '../context/optionContext';
import AdManagement from './manage/AdManagement';
import Statistics from './Statistics';

const Content = () => {
  const { option } = useOption();
  return (
    <Container>
      {option === 1 ? (
        <>
          <GraphTitle>통합 광고 현황</GraphTitle>
          <Statistics />
        </>
      ) : (
        <AdManagement />
      )}
    </Container>
  );
};

export default Content;

const Container = styled.div`
  padding-top: 20px;
  min-height: 80vh;
`;

const GraphTitle = styled.div`
  padding-left: 60px;
  padding-bottom: 20px;
  font-weight: 500;
`;
