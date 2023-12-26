import { useVisible } from "@/hooks/useVisible";
import { CategoryArray } from "@/utils/CategoryArray";
import * as S from "./styled";

const CategorySection = () => {
  const [ref, visible] = useVisible();

  return (
    <S.CategorySectionWrapper
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(50px)",
      }}
      ref={ref}
    >
      <S.CategorySectionTitle>여러장르를 한번에</S.CategorySectionTitle>
      <S.CategorySectionDesc>
        여러가지 장르를 동시에 선택가능하게해서 더 원하는 영화/미디어를 찾으실
        수 있습니다
      </S.CategorySectionDesc>
      <S.CategoryArrayWrapper>
        {CategoryArray.map((category) => (
          <S.PromotionCategoryItem key={category}>
            {category}
          </S.PromotionCategoryItem>
        ))}
      </S.CategoryArrayWrapper>
    </S.CategorySectionWrapper>
  );
};

export default CategorySection;
