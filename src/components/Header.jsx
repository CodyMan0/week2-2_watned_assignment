import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <Container>주영님</Container>;
};

export default Header;

const Container = styled.div`
  height: 80px;
  padding: ${(props) => props.theme.style.xl};
  text-align: right;
  color: ${(props) => props.theme.style.gray};
`;
