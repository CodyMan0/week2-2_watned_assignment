import React from 'react';
import styled from 'styled-components';

const Categories = ({ title }) => {
  return <Title>{title}</Title>;
};

export default Categories;

const Title = styled.header`
  padding: ${(props) => props.theme.style.s};
  font-size: ${(props) => props.theme.style.smallerFont};
`;
