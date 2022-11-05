import React from 'react';
import styled from 'styled-components';

const ManagePage = () => {
  return <Container>ManagePage</Container>;
};

export default ManagePage;

const Container = styled.div`
  flex: 3.5;
  background-color: ${(props) => props.theme.style.background};
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 3px;
  backdrop-filter: blur(60px);
`;
