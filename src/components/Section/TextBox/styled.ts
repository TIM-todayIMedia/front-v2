import styled from "@emotion/styled";

export const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 10;
  transition: all 0.5s;
`;

export const TextBoxTitle = styled.span`
  font-weight: 900;
  font-size: 70px;
`;

export const TextBoxDesc = styled.span`
  font-weight: 500;
  font-size: 40px;
`;

export const ScrollBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 500px;
  padding-bottom: 500px;
`;
