import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAdList } from '../../context/AdListContext';
import { useContentData } from '../../context/dataContext';
import Dropdown from '../leftSide/DropDown';
import CardList from './CardList';

const AdManagement = () => {
  const [adList, setAdList, adTitle, setAdTitle, onTitleClickHandler] = useAdList();
  const [title, setTitle] = useState('전체광고');

  useEffect(() => {
    axios.get('/data/adList.json').then((res) => {
      setAdList(res.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <Dropdown title={title} onTitleClickHandler={onTitleClickHandler} />
      </Header>
      <CardList />
    </Container>
  );
};

export default AdManagement;

const Container = styled.div`
  width: 90%;
  margin-left: 60px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  background-color: white;
  padding: ${(props) => props.theme.style.xl};
`;

const Header = styled.div`
  width: 130px;
  position: relative;
`;
