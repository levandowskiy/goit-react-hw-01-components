import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 300px;
  height: 300px;
 
`;

export const Table = styled.table`

  border: 1px solid black;
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
  /* display: flex; */
`;

export const Title = styled.th`
  text-align: center;
  width: 100px;
  border: 1px solid black;
`;

const TableCell = styled.td`
  width: 100px;
  text-align: center;
  border: 1px solid black;
`;

export const Type = styled(TableCell)``;

export const Amount = styled(TableCell)``;

export const Currency = styled(TableCell)``;
