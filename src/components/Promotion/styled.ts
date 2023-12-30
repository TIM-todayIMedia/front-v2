import styled from "@emotion/styled";

export const PromotionWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: none;
`;

export const Video = styled.video`
  position: fixed;
  top: 0;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  outline: none;
  border: none;
`;

export const ScrollSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;

export const MainText = styled.div`
  color: white;
  z-index: 10;
  font-weight: 900;
  font-size: 80px;
  text-align: center;
  word-break: keep-all;

  @media (max-width: 763px) {
    font-size: 40px;
  }
`;

export const MainTextBox = styled.div`
  height: 100vh;
  width: 87%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  overflow-y: none;
`;

export const DirectBtn = styled.button`
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 800;
  color: white;
  z-index: 2;
  border: none;
  border-radius: 20px;
  transition: all 0.2s;
  background-color: #4940a4;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  :hover {
    height: 85px;
    width: 220px;
    font-size: 30px;
  }

  @media (max-width: 763px) {
    width: 150px;
    height: 50px;
    font-size: 15px;
    border-radius: 10px;
  }
`;

export const ScrollBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
`;
