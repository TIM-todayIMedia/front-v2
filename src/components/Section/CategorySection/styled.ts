import styled from "@emotion/styled";

export const CategorySectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  color: white;
  gap: 20px;
  margin-bottom: 160px;

  @media (max-width: 763px) {
    margin-bottom: 100px;
  }
`;

export const CategorySectionTitle = styled.span`
  font-weight: 900;
  font-size: 80px;
  transition: all 0.5s;

  @media (max-width: 763px) {
    font-size: 37px;
  }
`;

export const CategorySectionDesc = styled.span`
  font-weight: 500;
  font-size: 30px;
  transition: all 0.5s;
  text-align: center;
  word-break: keep-all;

  @media (max-width: 763px) {
    font-size: 17px;
  }
`;

export const CategoryArrayWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1000px;
  gap: 20px;

  @media (max-width: 1000px) {
    width: 95%;
    gap: 13px;
  }
`;

export const PromotionCategoryItem = styled.div`
  width: 150px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: gray;
  font-weight: 600;
  font-size: 30px;
  border-radius: 15px;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    font-size: 32px;
  }

  @media (max-width: 763px) {
    width: 85px;
    height: 37.5px;
    font-size: 17px;
    border-radius: 10px;

    :hover {
      font-size: 18px;
    }
  }
`;

export const DirectBtn = styled.button`
  width: 30%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 800;
  color: white;
  z-index: 2;
  border: none;
  border-radius: 20px;
  transition: all 0.2s;
  background-color: #4940a4;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 20px 0;

  :hover {
    width: 35%;
  }

  @media (max-width: 763px) {
    width: 20%;
    font-size: 15px;
    height: 40px;
    border-radius: 10px;

    :hover {
      width: 25%;
    }
  }
`;
