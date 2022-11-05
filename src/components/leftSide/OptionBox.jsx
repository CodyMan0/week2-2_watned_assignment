import React from 'react';
import styled from 'styled-components';
import { useOption } from '../../context/dataContext';
import Categories from './Categories';

const OptionBox = () => {
  const AD_LISTS = [
    { id: 1, title: '대시보드' },
    { id: 2, title: '광고관리' },
  ];

  const { onOptionHandler } = useOption();

  return (
    <Container>
      <Categories title="광고센터" />
      {AD_LISTS.map((adList) => (
        <OptionItem key={adList.id} onClick={() => onOptionHandler(adList.id)}>
          {adList.title}
        </OptionItem>
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
