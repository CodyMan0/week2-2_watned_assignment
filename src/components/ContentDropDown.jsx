import React from 'react';
import styled from 'styled-components';
import Dropdown from './leftSide/DropDown';

const ContentDropDown = () => {
  return (
    <Container>
      <SubContainer>
        <FirstDropDown>
          <Dropdown title="ROAS">12dfdfdfdf 3</Dropdown>
        </FirstDropDown>
        <SecondDropDown>
          <Dropdown title="클릭수">12dfdfdfdf 3</Dropdown>
        </SecondDropDown>
      </SubContainer>
      <ThirdDropDown>
        <Dropdown title="주간">12dfdfdfdf 3</Dropdown>
      </ThirdDropDown>
    </Container>
  );
};

export default ContentDropDown;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.style.xl};
  gap: 10px;
`;
const SubContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const FirstDropDown = styled.div`
  width: 130px;
  position: relative;
`;

const SecondDropDown = styled.div`
  width: 130px;
  position: relative;
`;

const ThirdDropDown = styled.div`
  width: 130px;
  position: relative;
`;
