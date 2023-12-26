"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CategorySection from "../Section/CategorySection";
import TextBox from "../Section/TextBox";
import * as S from "./styled";

const Promotion = () => {
  const router = useRouter();
  const [visibleValue, setVisibleValue] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY < 101) {
        setVisibleValue(1 - scrollY * 0.01);
      } else if (scrollY > 100) {
        setVisibleValue(0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.PromotionWrapper>
      <S.Video loop muted autoPlay playsInline>
        <source src="/videos/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </S.Video>
      <S.ScrollSection>
        <S.MainTextBox style={{ opacity: visibleValue }}>
          <S.MainText>
            WTM 에서 제공하는{" "}
            <span
              style={{
                color: "#3b3681",
              }}
            >
              오늘의 영화/드라마
            </span>
            와 <br /> 다양한 정보들.
          </S.MainText>
          <S.DirectBtn onClick={() => router.push("/home/1")}>
            지금 둘러보기
          </S.DirectBtn>
        </S.MainTextBox>
        <S.ScrollBox>
          <TextBox
            title={
              "지속적으로 업데이트되고있는 영화/드라마의 다양한 정보를 확인하세요"
            }
            desc={
              "(제목, 설명, 장르, 평점, 명대사, 개봉일/상영일, 포스터, 예고편, 왓차피디아, Ost)"
            }
          />
          <CategorySection />
        </S.ScrollBox>
      </S.ScrollSection>
    </S.PromotionWrapper>
  );
};

export default Promotion;
