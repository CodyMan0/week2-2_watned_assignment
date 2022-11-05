import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import Dropdown from './DropDown';

const ServiceDropDown = () => {
  return (
    <Container>
      <Categories title="서비스" />
      <Dropdown title="매드업" />
    </Container>
  );
};

export default ServiceDropDown;

const Container = styled.div`
  padding: ${(props) => props.theme.style.xl};
`;
