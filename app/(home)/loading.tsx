"use client";
import * as S from "@/components/common/Styles/home";
import SkeletonListBox from "../ui/Skeletons/SkeletonItem";

export default function HomeLoadingPage() {
  const MockData: readonly number[] = Array.from(Array(50));

  return (
    <S.Wrapper>
      <S.ListWrapper>
        {MockData.map((_, idx) => (
          <SkeletonListBox key={idx} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
