import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentDropDown from './ContentDropDown';
import Graph from './Graph';
import StateIndicator from './StateIndicator';

const Statistics = () => {
  const [stateValues, setStateValue] = useState([]);

  useEffect(() => {
    axios.get('/data/data.json').then((res) => {
      setStateValue(res.data);
    });
  }, [setStateValue]);

  return (
    <Container>
      <CurrentState>
        <StateIndicator />
        <ContentDropDown />
        <Graph />
      </CurrentState>
    </Container>
  );
};

export default Statistics;

const Container = styled.div`
  width: 90%;
  padding-left: 60px;
  padding-top: 10px;
`;

const CurrentState = styled.div``;
