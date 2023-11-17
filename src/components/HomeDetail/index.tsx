"use client";
import { listProps } from "@/types";
import * as S from "./styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  BackIcon,
  LinkIcon,
  SpotifyIcon,
  SquareIcon,
  StartIcon,
} from "@/assets/svg";
import { CategoryBox } from "../common";
import { CategoryColorArr } from "@/utils/CategoryArray";

const HomeDetail = ({ data }: { data: listProps }) => {
  const router = useRouter();

  const handleOstClick = () => {
    window.open(data.properties.Ost.url);
  };

  return (
    <S.Wrapper>
      <S.LeftWrapper>
        {/* <S.TopWrapper> */}
        {/* <S.TopLeft onClick={() => router.back()}>
            <BackIcon />
          </S.TopLeft> */}
        {/* </S.TopWrapper> */}
        <S.MiddleWrapper>
          <S.Title>{data?.properties?.Name?.title[0]?.text?.content}</S.Title>
          <S.MiddleTop>
            <S.TitleWrapper>
              <span>
                {`${data?.properties?.Date?.date?.start}`}
                {data?.properties?.Date?.date?.end &&
                  ` ~ ${data?.properties?.Date?.date?.end}`}
              </span>
            </S.TitleWrapper>
          </S.MiddleTop>
        </S.MiddleWrapper>

        <S.DecsWrapper>
          <S.DecsLong>
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
      </S.LeftWrapper>
      <S.RightWrapper>
        <Image
          src={data?.cover?.external?.url || data?.cover?.file?.url || ""}
          alt={"디테일 페이지"}
          style={{ objectFit: "cover", filter: "brightness(50%)" }}
          fill
        />
      </S.RightWrapper>

      <S.MiddleBottom>
        <S.Grade>
          {data?.properties.Grade.multi_select.map((i) => (
            <span key={i.id}>{`${i.name} / 5`} </span>
          ))}
        </S.Grade>
        <S.CategoryBtns>
          {data?.properties.Category.multi_select.map((i) => (
            <CategoryBox
              key={i.id}
              color={CategoryColorArr[i.color] ?? i.color}
              name={i.name}
              fontSize={"20px"}
            />
          ))}
        </S.CategoryBtns>
      </S.MiddleBottom>
      <S.OstWrapper onClick={handleOstClick}>
        <SpotifyIcon />
      </S.OstWrapper>
      <S.DetailImagOverlay>
        <Image
          src={data?.cover?.external?.url || data?.cover?.file?.url || ""}
          alt={"디테일 페이지"}
          style={{ objectFit: "cover", filter: "brightness(15%) blur(7px)" }}
          fill
        />
      </S.DetailImagOverlay>
    </S.Wrapper>
  );
};

export default HomeDetail;
