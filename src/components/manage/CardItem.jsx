import React from 'react';
import styled from 'styled-components';
import Information from './Information';

const CardItem = () => {
  return (
    <Container>
      <Title>title</Title>
      <Information />
      <Information />
      <Information />
      <Information />
      <Information />
      <Information />
      <Button type="button">수정하기</Button>
    </Container>
  );
};

export default CardItem;

const Container = styled.div`
  width: 305px;
  height: 420px;
  margin-top: 20px;
  margin-right: 20px;
  background: #ffffff;
  border: 1px solid ${(props) => props.theme.style.gray};
  border-radius: 10px;
`;

const Title = styled.h1`
  padding: 40px 20px;
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.style.m};
  color: ${(props) => props.theme.style.black};
  line-height: 19px;
`;

const Button = styled.button`
  padding: 12px 20px;
  margin: 10px 0px 0px 10px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
`;
