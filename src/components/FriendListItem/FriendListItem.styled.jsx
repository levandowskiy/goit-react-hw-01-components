import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid black;
    width: 200px;
    height: 80px;
    padding: 10px;
`

export const Status = styled.span`
    width: 10px;
    height: 10px;
    background-color: ${({status}) => {
        switch (status) {
            case true:
            return "green";

            case false:
            return "red";

            default:
            return "black";
        }
    }};
    
`

export const Avatar = styled.img`
    
`

export const Name = styled.p`
    
`