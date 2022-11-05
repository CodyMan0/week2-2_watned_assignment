import React from 'react';
import styled from 'styled-components';
import Statistics from './Statistics';

const Content = () => {
  return (
    <Container>
      <GraphTitle>통합 광고 현황</GraphTitle>
      <Statistics />
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
`;
