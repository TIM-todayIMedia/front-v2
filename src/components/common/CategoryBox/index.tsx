import * as S from "./styled";

const CategoryBox = ({ color, name }: { color: string; name: string }) => {
  return (
    <S.Wrapper color={color === "default" ? "gray" : color}>{name}</S.Wrapper>
  );
};

export default CategoryBox;
