import React from 'react';
import styled from 'styled-components';

const Information = ({
  status,
  startDate,
  budget,
  report,
  convValue,
  cost,
}) => {
  return (
    <Container>
      <TitleBox>
        <WrapperOne>
          <tr>
            <th>
              {status && '상태'}
              {startDate && '광고 생성일'}
              {budget && '일일 희망 예산'}
              {report && '광고 수익률'}
              {convValue && '매출'}
              {cost && '광고 비용'}
            </th>
          </tr>
        </WrapperOne>
        <WrapperTwo>
          <tr>
            <td>
              {status}
              {startDate?.substr(0, 10)}
              {budget}
              {convValue}
              {report}
              {cost}
            </td>
          </tr>
        </WrapperTwo>
      </TitleBox>
    </Container>
  );
};

export default Information;

const Container = styled.div`
  width: 90%;
  height: 43px;
  border-top: 0.5px solid #d1d8dc;
  margin: 0 auto;
`;

const TitleBox = styled.table`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
`;

const WrapperOne = styled.thead`
  flex: 1;
  font-size: ${(props) => props.theme.style.s};
  font-weight: 500;
  color: ${(props) => props.theme.style.gray};
`;
const WrapperTwo = styled.tbody`
  flex: 1.5;
  font-size: ${(props) => props.theme.style.s};
  font-weight: 700;
  color: ${(props) => props.theme.style.black};
`;

const Title = styled.th``;
const Content = styled.td``;
