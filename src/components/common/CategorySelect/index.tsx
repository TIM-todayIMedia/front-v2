import { CategorySelectProps } from "@/types/common";
import * as S from "./styled";

const CategorySelect = ({ name, onClick, isClick }: CategorySelectProps) => {
  return (
    <S.Wrapper
      style={{
        color: isClick ? "white" : "#353535",
        backgroundColor: isClick ? "#637AAE" : "white",
      }}
      onClick={onClick}
    >
      {name}
    </S.Wrapper>
  );
};

export default CategorySelect;
