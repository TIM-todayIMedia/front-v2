import styled from "@emotion/styled";

export const CategorySectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  color: white;
  gap: 20px;
`;

export const CategorySectionTitle = styled.span`
  font-weight: 900;
  font-size: 80px;
  transition: all 0.5s;
`;

export const CategorySectionDesc = styled.span`
  font-weight: 500;
  font-size: 30px;
  transition: all 0.5s;
  text-align: center;
`;

export const CategoryArrayWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1000px;
  gap: 20px;
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
    width: 33%;
    height: 88px;
    font-size: 33px;
  }
`;
