import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import ContentDropDown from './ContentDropDown';
import StateIndicator from './StateIndicator';
import { useContentData } from '../context/dataContext';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Statistics = () => {
  const [contentData, setContentData, TEM_DATA, AD_LIST] = useContentData();

  useEffect(() => {
    axios.get('/data/data.json').then((res) => {
      setContentData(res.data);
    });
  }, []);

  const data = {
    labels: [
      'week1 May',
      'week2 May',
      'week3 May',
      'week4 May',
      'week5 May',
      'week1 June',
      'week2 June',
    ],
    datasets: [
      {
        data: [8, 2, 3, 4, 5, 6, 4],
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
