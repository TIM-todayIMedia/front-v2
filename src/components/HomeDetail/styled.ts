import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgba(255, 255, 255, 0.05);
  color: #e7e7e7;
  overflow-y: hidden;
`;

export const RightWrapper = styled.div`
  position: absolute;
  left: 0%;
  width: 40%;
  height: 100vh;
  z-index: -1;
`;

export const DetailImagOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -12;
`;

export const LeftWrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 0 10% 5%;
  margin-left: 48%;
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
  svg {
    width: 40px;
  }
`;

export const MiddleWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const MiddleTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MiddleBottom = styled.div`
  width: 300px;
  position: fixed;
  right: -170px;
  top: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    padding-top: 20px;
    font-size: 1.3rem;
  }
`;

export const Title = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
`;

export const OstWrapper = styled.div`
  position: fixed;
  right: 10px;
  bottom: -860px;
  width: 70px;
  height: 100%;
  padding: 5px 0;

  svg {
    cursor: pointer;
    width: 20px;
    :hover {
      path {
        transition: all 0.5s ease;
        fill: #1ed760;
      }
    }
  }
`;

export const CategoryBtns = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const Grade = styled.div`
  height: 50px;
  display: flex;
  gap: 5px;
  align-items: center;

  svg {
    width: 25px;
    color: #9288f8;
  }

  span {
    font-size: 25px;
  }
`;

export const DecsWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 50px;
`;

export const DecsLong = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #9288f8;

    svg {
      width: 30px;
    }
  }

  div {
    font-size: 1.3rem;
  }

  pre {
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-align: center;
    white-space: pre-wrap;
    word-break: break-all;
    overflow: auto;
    height: 100%;
  }
`;
