import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAddList } from '../../context/AdListContext';
import CardItem from './CardItem';

const CardList = () => {
  const [adList, setAdList, adTitle, setAdTitle, onTitleClickHandler, filterFunction] =
    useAddList();

  useEffect(() => {
    axios.get('/data/adList.json').then((res) => {
      setAdList(res.data);
    });
  }, [setAdList]);

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
