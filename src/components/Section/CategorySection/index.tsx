import { useVisible } from "@/hooks/useVisible";
import { CategoryArray } from "@/utils/CategoryArray";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as S from "./styled";

const CategorySection = () => {
  const router = useRouter();
  const [ref, visible] = useVisible();
  const [filterCategoryArray, setFilterCategoryArray] = useState<string[]>([]);

  const handleCategorySelectClick = (name: string) => {
    if (!filterCategoryArray.includes(name)) {
      setFilterCategoryArray([...filterCategoryArray, name]);
    } else {
      const arr = filterCategoryArray.filter((i) => i !== name);
      setFilterCategoryArray(arr);
    }
  };

  const handleSubmitClick = () =>
    router.push(`/filter/${filterCategoryArray.join(" ")}`);

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
            onClick={() => handleCategorySelectClick(category)}
            style={{
              backgroundColor: filterCategoryArray.includes(category)
                ? "#4940a4"
                : "white",
              color: filterCategoryArray.includes(category) ? "white" : "gray",
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
        <S.DirectBtn
          style={{
            opacity: filterCategoryArray.length > 0 ? 1 : 0,
          }}
          onClick={handleSubmitClick}
        >
          검색하기
        </S.DirectBtn>
      </S.CategoryArrayWrapper>
    </S.CategorySectionWrapper>
  );
};

export default CategorySection;
