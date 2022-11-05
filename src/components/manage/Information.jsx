import React from 'react';
import styled from 'styled-components';

const Information = () => {
  return (
    <Container>
      <TitleBox>
        <WrapperOne>
          <Title>12</Title>
        </WrapperOne>
        <WrapperTwo>
          <Content>답</Content>
        </WrapperTwo>
      </TitleBox>
    </Container>
  );
};

export default Information;

const Container = styled.div`
  width: 90%;
  height: 43px;
  border-top: 0.5px solid #d1d8dc;
  margin: 0 auto;
`;

const TitleBox = styled.table`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
`;

const WrapperOne = styled.tr`
  flex: 1;
  font-size: ${(props) => props.theme.style.s};
  font-weight: 500;
  color: ${(props) => props.theme.style.gray};
`;
const WrapperTwo = styled.tr`
  flex: 1.5;
  font-size: ${(props) => props.theme.style.s};
  font-weight: 700;
  color: ${(props) => props.theme.style.black};
`;

const Title = styled.th``;
const Content = styled.td``;
