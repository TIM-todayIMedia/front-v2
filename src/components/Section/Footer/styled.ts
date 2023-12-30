import styled from "@emotion/styled";

export const Footer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  transition: all 0.5s ease;

  svg {
    transition: all 0.3s ease;
    cursor: pointer;
    width: 70px;
    height: 80px;

    path {
      transition: all 0.3s ease;
      fill: white;
    }

    :hover {
      transform: translateY(-15px) !important;
    }
  }

  @media (max-width: 1000px) {
    width: 200px;
    margin-bottom: 20px;
    svg {
      width: 40px;
      height: 50px;
    }
  }
`;
