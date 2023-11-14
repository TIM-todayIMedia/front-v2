import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 260px;
    height: 430px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 30px 0;
    border-radius: 5px;

    :hover {
        transform: translateY(-10px);
    }
`;

export const WhiteBox = styled.div`
    width: 100%;
    height: 350px;
    background-color: white;
`;

export const Decs = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    padding: 0 4%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const Title = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
export const Categorys = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 3%;
`; 