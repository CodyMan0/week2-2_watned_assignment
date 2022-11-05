import React, { useState } from 'react';
import { BiArrowToBottom } from 'react-icons/bi';
import styled from 'styled-components';

const Dropdown = ({ title }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dropdownClicked = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <>
      <Box onClick={dropdownClicked}>
        <Title>
          {title}
          <BiArrowToBottom />
        </Title>
      </Box>
      {isClicked && <SelectOption>서비스 추가하기</SelectOption>}
    </>
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
  padding: ${(props) => (props.children[0] === '매드업' ? '32px' : '18px')};
  border: 1px solid #d1d8dc;
  border-radius: 10px;
`;

const SelectOption = styled.div`
  padding: ${(props) => (props.children[0] === '매드업' ? '32px' : '18px')};
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  color: #d1d8dc;
`;

const FilterItem = styled.div``;
