import React, { useState } from 'react';
import styled from 'styled-components';
import ContentPage from '../components/ContentPage';
import Sidebar from '../components/leftSide/Sidebar';
import ManagePage from '../components/manage/ManagePage';
import { useOption } from '../context/dataContext';

const Home = () => {
  const { option } = useOption();

  return (
    <Container>
      <Sidebar />
      {option === 1 && <ContentPage />}
      {option === 2 && <ManagePage />}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 200vh;
`;
