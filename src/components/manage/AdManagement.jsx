import React from 'react';
import styled from 'styled-components';
import Dropdown from '../leftSide/DropDown';
import CardList from './CardList';

const AdManagement = () => {
  return (
    <Container>
      <Header>
        <Dropdown title="전체광고" />
      </Header>
      <CardList />
    </Container>
  );
};

export default AdManagement;

const Container = styled.div`
  width: 90%;
  margin-left: 60px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  background-color: white;
  padding: ${(props) => props.theme.style.xl};
`;

const Header = styled.div`
  width: 130px;
  position: relative;
`;
