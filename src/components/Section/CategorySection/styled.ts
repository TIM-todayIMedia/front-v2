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
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: gray;
  font-weight: 600;
  font-size: 30px;
  border-radius: 15px;
  transition: all 0.3s ease-in;
`;
