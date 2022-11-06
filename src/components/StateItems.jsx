import React from 'react';
import styled from 'styled-components';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import vaildateCost from '../utils/vaildateCost';

const StateItems = ({ el }) => {
  return (
    <StateItem>
      <StateItemTitle>{el.title}</StateItemTitle>
      <StateBox>
        <StateItemContent>{`${vaildateCost(el.content)}${el.unit}`}</StateItemContent>
        <p>
          <IconUp>
            <TiArrowSortedUp />
          </IconUp>
          <IconDown>
            <TiArrowSortedDown />
          </IconDown>
          상승
        </p>
      </StateBox>
    </StateItem>
  );
};

export default StateItems;

const StateItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 79px;
  padding: ${(props) => props.theme.style.s} ${(props) => props.theme.style.xl};
  border-radius: 10px;
  border: 0.5px solid #edeff1;
  border-radius: 10px;
`;

const StateItemTitle = styled.div`
  justify-self: center;
  height: 20px;
  color: ${(props) => props.theme.style.gray};
`;

const StateItemContent = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

const StateBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: ${(props) => props.theme.style.black};

  p {
    color: ${(props) => props.theme.style.gray};
  }
`;

const IconUp = styled.span`
  color: red;
`;

const IconDown = styled.span`
  color: green;
`;
