import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 250px;
  height: 250px;
  border: 1px solid grey;
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

export const Fhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const Text = styled.p`
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
`;

export const StatsItem = styled.li`
  text-align: center;
  padding: 15px;
`;

export const StatsInfo = styled.span`
  color: black;
`;


