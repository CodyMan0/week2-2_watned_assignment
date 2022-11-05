import React from 'react';
import styled from 'styled-components';
import ContentPage from '../components/ContentPage';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <Container>
      <Sidebar>1</Sidebar>
      <ContentPage>2</ContentPage>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
