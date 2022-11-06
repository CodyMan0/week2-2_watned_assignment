import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import ContentDropDown from './ContentDropDown';

import StateIndicator from './StateIndicator';
import processingArray from './processingArray';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Statistics = () => {
  const [stateValues, setStateValue] = useState([]);
  const { report } = stateValues || {};
  const { daily } = report || {};

  const variable = processingArray('cpc', daily);

  useEffect(() => {
    axios.get('/data/data.json').then((res) => {
      setStateValue(res.data);
    });
  }, [setStateValue]);

  const data = {
    labels: ['May 12', 'May 13', 'May 14', 'May 15', 'May 16'],
    datasets: [
      {
        data: [8, 2, 3, 4, 5],
      },
    ],
  };
  const options = {};

  return (
    <Container>
      <CurrentState>
        <StateIndicator />
        <ContentDropDown />
        <GraphState>
          <Line data={data} options={options} />
        </GraphState>
      </CurrentState>
    </Container>
  );
};

export default Statistics;

const Container = styled.div`
  width: 90%;
  margin-left: 60px;
  padding-top: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  background-color: white;
`;

const CurrentState = styled.div``;

const GraphState = styled.div`
  width: 95%;
  margin-left: 20px;
  padding: 20px;
`;
