"use client";
import * as S from "@/components/common/Styles/home";
import SkeletonListBox from "@/app/ui/Skeletons/SkeletonListBox";

export default function HomeLoadingUi() {
  const NUM = 10;
  const mockData: readonly number[] = Array(NUM).fill(0);

  return (
    <S.Wrapper>
      <S.ListWrapper>
        {mockData.map((_, idx) => (
          <SkeletonListBox key={idx} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
