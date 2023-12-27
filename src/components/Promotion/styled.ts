import styled from "@emotion/styled";

export const PromotionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: none;
`;

export const Video = styled.video`
  position: fixed;
  top: 0;
  height: 100%;
  object-fit: cover;
  outline: none;
  border: none;
`;

export const ScrollSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const MainText = styled.div`
  color: white;
  z-index: 10;
  font-weight: 900;
  font-size: 80px;
  text-align: center;
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
`;

export const ScrollBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 500px;
  padding-bottom: 230px;
`;
