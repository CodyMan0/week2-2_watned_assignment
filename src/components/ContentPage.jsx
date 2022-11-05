import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import ContentTitle from './ContentTitle';
import Header from './Header';

const ContentPage = () => {
  return (
    <Container>
      <Header />
      <ContentTitle />
      <Content />
    </Container>
  );
};

export default ContentPage;

const Container = styled.div`
  flex: 3.5;
  background-color: ${(props) => props.theme.style.background};
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 3px;
  backdrop-filter: blur(60px);
`;
