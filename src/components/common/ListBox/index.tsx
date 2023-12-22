"use client";
import { CoverProps, MultiSelectProps } from "@/types";
import * as S from "./styled";
import Image from "next/legacy/image";
import { CategoryBox } from "..";
import { useRouter } from "next/navigation";
import { CategoryColorArr } from "@/utils/CategoryArray";

const ListBox = ({
  cover,
  title,
  categorys,
}: {
  cover: CoverProps;
  title: string;
  categorys: MultiSelectProps[];
}) => {
  const router = useRouter();
  const detailDirectRoute = () => router.push(`/detail/${title}`);

  return (
    <S.Wrapper onClick={detailDirectRoute}>
      <Image
        src={cover?.external?.url || cover?.file?.url || ""}
        alt="포스터 이미지"
        priority={true}
        layout={"fixed"}
        width={200}
        height={296}
        className={"listBoxImag"}
      />
      <S.Decs>
        <S.Title>{title}</S.Title>
        <S.CategorysWrapper>
          {categorys.map((categoryItem) => (
            <CategoryBox
              key={categoryItem.id}
              color={CategoryColorArr[categoryItem.color] ?? categoryItem.color}
              name={categoryItem.name}
              fontSize={"0.8rem"}
            />
          ))}
        </S.CategorysWrapper>
      </S.Decs>
    </S.Wrapper>
  );
};

export default ListBox;
