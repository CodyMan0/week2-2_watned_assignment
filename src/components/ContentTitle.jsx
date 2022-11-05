import React from 'react';
import styled from 'styled-components';
import { useOption } from '../context/dataContext';

const ContentTitle = () => {
  const { option } = useOption();
  return (
    <Container>
      <TitleName>{option === 1 ? '대시보드' : '광고관리'}</TitleName>
      <Date>ContentTitle</Date>
    </Container>
  );
};

export default ContentTitle;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: ${(props) => props.theme.style.xl};
  color: ${(props) => props.theme.style.black};
`;

const TitleName = styled.div`
  font-weight: 900;
  font-size: ${(props) => props.theme.style.l};
  padding: ${(props) => props.theme.style.xl};
  color: ${(props) => props.theme.style.black};
`;

const Date = styled.div`
  font-size: ${(props) => props.theme.style.m};
  padding: ${(props) => props.theme.style.xl};
  color: ${(props) => props.theme.style.black};
`;
