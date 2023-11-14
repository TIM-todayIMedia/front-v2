import styled from "@emotion/styled";

export const HeaderWapper = styled.div`
    height: 8vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    transition: all 0.3s ease-in;
    border: 1px solid gray;
    background-color: white;
`;

export const LeftWapper = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    p{
        font-size: 2.3rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #143A67;
        cursor: pointer;
    }
`;


export const ProfileBox = styled.div`
   width :50px;
   height: 100%;
    svg{
        width: 50px;
        height: 100%;
        cursor: pointer;

    }
`;

export const DarkModeBtn = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #EFEFEF;
    }

`;



export const InputWapper = styled.div`
    position: relative;
    width: 400px;
    height: 4.5vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 2px solid #637AAE;
    border-radius: 10px;
    padding-left: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    input {
        color: gray;
        border: none;
        width: 87%;
        height: 100%;
        outline: none;
        font-size: 1rem;
        background-color: transparent;
    }

    label{
        position: absolute;
        top: 6px;
        left: 350px;
        width: 25px;
        cursor: pointer;
        color: #637AAE;
    }
`;
export const CenterWrapper = styled.div`
    display: flex;
    gap: 30px;
    position: relative;
`;

export const FilterBtn = styled.div`
    width: 200px;
    height: 4.5vh;
    display: flex;
    border: 1px solid #637AAE;
    display: flex;
    align-items: center;
    border-radius: 10px;
    color: #637AAE;
    padding-left: 15px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const FilterBox = styled.div`
    position: absolute;
    top: 50px;
    left: -200px;
    width: 400px;
    height: 180px;
    display: flex;
    flex-direction: column;
    border: 1px solid #637AAE;
    border-radius: 10px;
    background-color: white;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const BoxTop = styled.div`
    width: 100%;
    height: 120px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid gray;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;


export const BoxBottom = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TagBtns = styled.div`
    width: 270px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid gray;
    input{
        display: none;
    }

    input[type=radio]+label{
        width: 88px;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        color: #637AAE;
        background-color: white;
        cursor: pointer;
        font-weight: bold;
        border-radius: 5px;
    }

    input[type=radio]:checked+label{
        color: white;
        background-color: #637AAE;
    }


`;

export const SubmitBtn = styled.div`
    width: 130px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        width: 105px;
        height: 50px;
        font-size: 1.45rem;
        color: white;
        background-color: #282A3A;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const RightWrapper = styled.div`
    position: relative;
`;