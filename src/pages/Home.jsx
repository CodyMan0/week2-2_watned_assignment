import React from 'react';
import styled from 'styled-components';
import ContentPage from '../components/ContentPage';
import Sidebar from '../components/leftSide/Sidebar';
import ManagePage from '../components/manage/ManagePage';
import AdListProvider from '../context/AdListContext';
import { ContentContextProvider } from '../context/dataContext';
import { useOption } from '../context/optionContext';

const Home = () => {
  const { option } = useOption();

  return (
    <ContentContextProvider>
      <AdListProvider>
        <Container>
          <Sidebar />
          {option === 1 && <ContentPage />}
          {option === 2 && <ManagePage />}
        </Container>
      </AdListProvider>
    </ContentContextProvider>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 200vh;
`;
