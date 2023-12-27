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

  useEffect(() => {
    router.prefetch("/home/1");
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
                color: "#4940a4",
              }}
            >
              오늘의 영화/드라마
            </span>
            와 다양한 정보들.
          </S.MainText>
          <S.DirectBtn onClick={() => router.push("/home/1")}>
            지금 둘러보기
          </S.DirectBtn>
        </S.MainTextBox>
        <S.ScrollBox>
          <TextBox />
          <CategorySection />
        </S.ScrollBox>
      </S.ScrollSection>
    </S.PromotionWrapper>
  );
};

export default Promotion;
