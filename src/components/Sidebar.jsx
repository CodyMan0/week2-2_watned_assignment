import React from 'react';
import styled from 'styled-components';
import OptionBox from './OptionBox';
import ServiceDropDown from './ServiceDropDown';

const Sidebar = () => {
  return (
    <Container>
      <SubContainer>
        <Logo src="./images/Lever_BI 1.png" />
      </SubContainer>
      <ServiceDropDown>1</ServiceDropDown>
      <OptionBox>2</OptionBox>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  flex: 1;
`;

const SubContainer = styled.div`
  height: inherit;
`;

const Logo = styled.img`
  height: inherit;
  padding: 60px 150px 60px 40px;
`;
