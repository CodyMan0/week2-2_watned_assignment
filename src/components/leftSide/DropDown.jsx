import React, { useState } from 'react';
import { BiArrowToBottom } from 'react-icons/bi';
import styled from 'styled-components';
import { useContentData } from '../../context/dataContext';

const Dropdown = ({ title, onTitleClickHandler, type }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [contentData, setContentData, TEM_DATA, AD_LIST, DAY_LIST] = useContentData();

  const dropdownClicked = () => {
    setIsClicked((prev) => !prev);
  };

  const conditionalVariable = (title) => {
    if (title === '주간') {
      return DAY_LIST.map((element, idx) => (
        <SelectMultiple key={idx} onClick={(e) => onTitleClickHandler(e, type)}>
          {element}
        </SelectMultiple>
      ));
    }
    if (title === '매드업') {
      return '서비스 추가하기';
    }
    if (title === '전체광고') {
      return AD_LIST.map((element, idx) => (
        <SelectMultiple key={idx} onClick={(e) => onTitleClickHandler(e, type)}>
          {element}
        </SelectMultiple>
      ));
    }
    if (title === 'ROAS' || '광고비' || '노출 수' || '클릭 수' || '전환 수' || '매출') {
      return TEM_DATA.map((element) => (
        <SelectMultiple key={element.id} onClick={(e) => onTitleClickHandler(e, type)}>
          {element.title}
        </SelectMultiple>
      ));
    }
  };

  return (
    <Box onClick={dropdownClicked}>
      <Title title={title}>
        {title}
        <BiArrowToBottom />
      </Title>
      {isClicked && <SelectOption title={title}>{conditionalVariable(title)}</SelectOption>}
    </Box>
  );
};

export default Dropdown;

const Box = styled.div`
  width: inherit;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ title }) => (title === '매드업' ? '32px' : '18px')};
  border: 1px solid #d1d8dc;
  border-radius: 10px;
`;

const SelectOption = styled.div`
  position: absolute;
  padding: ${({ title }) => (title === '매드업' ? '32px' : '18px')};
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  color: #d1d8dc;
  width: ${({ title }) => (title === '매드업' ? '290px' : '128px')};
`;

const SelectMultiple = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  background-color: white;
  color: #d1d8dc;
  width: 90px;
  color: ${(props) => props.theme.style.black};
  &:hover {
    color: ${(props) => props.theme.style.gray};
  }
`;
