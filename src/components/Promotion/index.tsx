"use client";
import * as S from "./styled";

const Promotion = () => {
  return (
    <S.PromotionWrapper>
      <S.Video loop muted autoPlay playsInline>
        <source src="/videos/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </S.Video>
    </S.PromotionWrapper>
  );
};

export default Promotion;
