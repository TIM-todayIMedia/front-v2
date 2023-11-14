import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 30%;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 0.9rem;
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
`;