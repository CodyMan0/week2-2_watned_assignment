import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from './leftSide/DropDown';

const ContentDropDown = () => {
  const [checkedTitle, setCheckedTitle] = useState({
    FirstContent: 'ROAS',
    SecondContent: '클릭수',
    ThirdContent: '주간',
  });
  const onTitleClickHandler = (e, type) => {
    setCheckedTitle({ ...checkedTitle, [type]: e.target.innerText });
  };

  return (
    <Container>
      <SubContainer>
        <FirstDropDown>
          <Dropdown
            title={checkedTitle.FirstContent}
            state={checkedTitle}
            setState={setCheckedTitle}
            onTitleClickHandler={onTitleClickHandler}
            type="FirstContent"
          />
        </FirstDropDown>
        <SecondDropDown>
          <Dropdown
            title={checkedTitle.SecondContent}
            state={checkedTitle}
            setState={setCheckedTitle}
            onTitleClickHandler={onTitleClickHandler}
            type="SecondContent"
          />
        </SecondDropDown>
      </SubContainer>
      <ThirdDropDown>
        <Dropdown
          title={checkedTitle.ThirdContent}
          type="ThirdContent"
          onTitleClickHandler={onTitleClickHandler}
        />
      </ThirdDropDown>
    </Container>
  );
};

export default ContentDropDown;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.style.xl};
  gap: 10px;
`;
const SubContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const FirstDropDown = styled.div`
  width: 130px;
  position: relative;
`;

const SecondDropDown = styled.div`
  width: 130px;
  position: relative;
`;

const ThirdDropDown = styled.div`
  width: 130px;
  position: relative;
`;
