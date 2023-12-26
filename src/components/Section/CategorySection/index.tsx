import { useVisible } from "@/hooks/useVisible";
import { CategoryArray } from "@/utils/CategoryArray";
import * as S from "./styled";

const CategorySection = () => {
  const [ref, visible] = useVisible();

  return (
    <S.CategorySectionWrapper ref={ref}>
      <S.CategorySectionTitle
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(50px)",
        }}
      >
        여러장르를 한번에
      </S.CategorySectionTitle>
      <S.CategorySectionDesc
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(50px)",
        }}
      >
        여러가지 장르를 동시에 선택가능해 더 보고싶은 영화/미디어를 찾으실 수
        있습니다
      </S.CategorySectionDesc>
      <S.CategoryArrayWrapper>
        {CategoryArray.map((category, idx) => (
          <S.PromotionCategoryItem
            key={idx}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0px) translateX(0px)"
                : `translateY(${
                    idx + 1 > 7 ? (idx + 1) * -50 : (idx + 1) * +50
                  }px) translateX(${
                    (idx + 1) % 2 === 0 ? (idx + 1) * +50 : (idx + 1) * -50
                  }px)`,
            }}
          >
            {category}
          </S.PromotionCategoryItem>
        ))}
      </S.CategoryArrayWrapper>
    </S.CategorySectionWrapper>
  );
};

export default CategorySection;
