import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

const CardList = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    axios.get('/data/adList.json').then((res) => {
      setCardList(res.data);
    });
  }, [setCardList]);

  const { ads } = cardList;

  return (
    <Container>
      {ads?.map((ad) => (
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
