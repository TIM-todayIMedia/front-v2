"use client";
import { listProps } from "@/types";
import * as S from "./styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BackIcon, LinkIcon, SquareIcon, StartIcon } from "@/assets/svg";
import { CategoryBox } from "../common";

const HomeDetail = ({ data }: { data: listProps }) => {
  const router = useRouter();

  const handleOstClick = () => {
    window.open(data.properties.Ost.url);
  };

  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <Image
          src={data?.cover?.external?.url || data?.cover?.file?.url || ""}
          alt={"디테일 페이지"}
          style={{ objectFit: "cover" }}
          fill
        />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.TopWrapper>
          {/* <S.TopLeft onClick={() => router.back()}>
            <BackIcon />
          </S.TopLeft> */}
        </S.TopWrapper>

        <S.MiddleWrapper>
          <S.MiddleTop>
            <S.TitleWrapper>
              <S.Title>
                {data?.properties?.Name?.title[0]?.text?.content}
              </S.Title>
              <span>
                {`${data?.properties?.Date?.date?.start}`}
                {data?.properties?.Date?.date?.end &&
                  ` ~ ${data?.properties?.Date?.date?.end}`}
              </span>
            </S.TitleWrapper>
            <S.OstWrapper onClick={handleOstClick}>
              <LinkIcon />
              <span>OST</span>
            </S.OstWrapper>
          </S.MiddleTop>
          <S.MiddleBottom>
            <S.CategoryBtns>
              {data?.properties.Category.multi_select.map((i) => (
                <CategoryBox
                  key={i.id}
                  color={i.color}
                  name={i.name}
                  fontSize={"20px"}
                />
              ))}
            </S.CategoryBtns>
            <S.Grade>
              {"평점 "}
              <StartIcon />
              {data?.properties.Grade.multi_select.map((i) => (
                <span key={i.id}>{i.name} </span>
              ))}
            </S.Grade>
          </S.MiddleBottom>
        </S.MiddleWrapper>

        <S.DecsWrapper>
          <S.DecsLong>
            <span>{"설명"}</span>
            <div>
              {data?.properties?.Described?.rich_text[0]?.text?.content}
            </div>
          </S.DecsLong>
          <S.DecsLong>
            <span>{"후기"}</span>
            <div>{data?.properties?.Review?.rich_text[0]?.text?.content}</div>
          </S.DecsLong>
          <S.DecsLong>
            <span>{"명대사"}</span>
            <pre>
              {data?.properties?.FamousLine?.rich_text[0]?.text?.content}
            </pre>
          </S.DecsLong>
        </S.DecsWrapper>
      </S.RightWrapper>
    </S.Wrapper>
  );
};

export default HomeDetail;
