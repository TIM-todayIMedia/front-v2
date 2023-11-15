"use client";
import { CoverProps, MultiSelectProps } from "@/types";
import * as S from "./styled";
import Image from "next/image";
import { CategoryBox } from "..";
import { useRouter } from "next/navigation";

const ListBox = ({
  cover,
  title,
  category,
}: {
  cover: CoverProps;
  title: string;
  category: MultiSelectProps[];
}) => {
  const router = useRouter();
  return (
    <S.Wrapper onClick={() => router.push(`/${title}`)}>
      {cover ? (
        <Image
          src={cover?.external?.url || cover?.file?.url || ""}
          alt="포스터 이미지"
          width={200}
          height={296}
          objectFit="cover"
          style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
        />
      ) : (
        <S.WhiteBox />
      )}
      <S.Decs>
        <S.Title>{title}</S.Title>
        <S.Categorys>
          {category.map((i) => (
            <CategoryBox key={i.id} color={i.color} name={i.name} />
          ))}
        </S.Categorys>
      </S.Decs>
    </S.Wrapper>
  );
};

export default ListBox;
