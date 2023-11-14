import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: space-between;

`;

export const LeftWrapper = styled.div`
    position: relative;
    width: 40%;
    height: 100%;
`;

export const RightWrapper = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const TopWrapper = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;

`;

export const TopLeft = styled.div`
    width: 100px;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    svg{
        width: 40px;
    }
`;

export const MiddleWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 5%;
`;

export const MiddleTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
`;

export const MiddleBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    span{
        padding-top: 20px;
        font-size: 1.3rem;
    }
`;

export const Title = styled.div`
    font-size: 3rem;
    font-weight: bold;
`;

export const OstWrapper = styled.div`
    width: 70px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    color: purple;
    gap: 5px;
    padding: 5px 0;
    font-size: 1.2rem;
    svg{
        cursor: pointer;
        width: 20px;
    }
    span{
        cursor: pointer;
    }
`;

export const CategoryBtns = styled.div`
    width: 30%;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Grade = styled.div`
    height: 50px;
    display: flex;
    gap: 5px;
    align-items: center;

    svg{
        width: 15px;
        color: #637AAE;
    }
`;

export const DecsWrapper = styled.div`
    width: 100%;
    height: 80vh;
    padding: 0 5%;

    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 100px;
`;

export const DecsLong = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;


    span{
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        color: #637AAE;

        svg{
            width: 30px;
        }
    }

    div{
        padding-left: 40px;
        font-size: 1.3rem;
    }

    pre{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        text-align: center;
        white-space: pre-wrap;
        word-break: break-all;
        overflow: auto;
        height: 35vh;
    }
`;