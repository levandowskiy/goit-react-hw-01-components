import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
`;

export const Title = styled.h2`
  margin: 20px 0;
  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  
`;

export const StatItem = styled.li`
  width: 20%;
  height: 60px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const StatLabel = styled.span``;

export const StatPercentage = styled.span``;
