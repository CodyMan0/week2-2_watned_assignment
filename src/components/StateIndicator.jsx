import React from 'react';
import styled from 'styled-components';
import processingArray from './processingArray';
import StateItems from './StateItems';

const StateIndicator = ({ daily }) => {
  console.log(daily);
  const ROAS = processingArray('roas', daily);
  const CPC = processingArray('cpc', daily);
  const COST = processingArray('cost', daily);
  const IMP = processingArray('imp', daily);
  const CLICK = processingArray('click', daily);
  const CONVVALUE = processingArray('convValue', daily);

  const TEM_DATA = [
    {
      id: 1,
      content: ROAS,
      title: 'ROAS',
      unit: '%',
    },
    {
      id: 2,
      content: CPC,
      title: '광고비',
      unit: '원',
    },
    {
      id: 3,
      content: COST,
      title: '노출 수',
      unit: '회',
    },
    {
      id: 4,
      content: CPC,
      title: '클릭 수',
      unit: '회',
    },
    {
      id: 5,
      content: CLICK,
      title: '전환 수',
      unit: '회',
    },
    {
      id: 6,
      content: CONVVALUE,
      title: '매출',
      unit: '원',
    },
  ];
  return (
    <Container>
      {TEM_DATA.map((el) => (
        <StateItems key={el.id} el={el}>
          {el}
        </StateItems>
      ))}
    </Container>
  );
};

export default StateIndicator;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 10px;
  padding: 18px 40px;
  width: auto;
  height: auto;
`;
