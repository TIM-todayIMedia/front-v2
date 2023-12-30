import styled from "@emotion/styled";

export const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 10;
  transition: all 0.5s;
  margin-bottom: 350px;
  word-break: keep-all;
`;

export const TextBoxTitle = styled.span`
  font-weight: 900;
  font-size: 71px;
  text-align: center;

  @media (max-width: 763px) {
    font-size: 35px;
  }
`;

export const TextBoxDesc = styled.span`
  font-weight: 500;
  font-size: 27px;
  text-align: center;

  @media (max-width: 763px) {
    font-size: 15px;
  }
`;
