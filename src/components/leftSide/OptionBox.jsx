import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';

const OptionBox = () => {
  const ADLISTS = [
    { id: 1, title: '대시보드' },
    { id: 2, title: '광고관리' },
  ];

  return (
    <Container>
      <Categories title="광고센터" />
      {ADLISTS.map((adList) => (
        <OptionItem key={adList.id}>{adList.title}</OptionItem>
      ))}
    </Container>
  );
};

export default OptionBox;

const Container = styled.div`
  padding: ${(props) => props.theme.style.xl};
`;

const OptionItem = styled.div`
  padding: ${(props) => props.theme.style.l};
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.theme.style.hover};
    color: ${(props) => props.theme.style.blue};
  }
`;
