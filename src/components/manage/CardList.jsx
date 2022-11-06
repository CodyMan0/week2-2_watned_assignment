import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAdList } from '../../context/AdListContext';
import CardItem from './CardItem';

const CardList = () => {
  const [adList, setAdList, adTitle, setAdTitle, onTitleClickHandler, filterFunction] = useAdList();

  return (
    <Container>
      {filterFunction()?.map((ad) => (
        <CardItem key={ad.id} ad={ad} />
      ))}
    </Container>
  );
};

export default CardList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
