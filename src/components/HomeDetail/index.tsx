"use client";
import { listProps } from "@/types";
import * as S from "./styled";
import Image from "next/image";
import { SpotifyIcon, WatchPediaIcon } from "@/assets/svg";
import { CategoryBox } from "../common";
import { CategoryColorArr } from "@/utils/CategoryArray";
import YouTube from "react-youtube";

const HomeDetail = ({ data }: { data: listProps }) => {
  const match =
    data?.properties.Trailer.url.match(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    ) ?? "";
  const videoId = match[7];

  return (
    <S.Wrapper>
      <S.RightWrapper>
        <Image
          src={data?.cover?.external?.url || data?.cover?.file?.url || ""}
          alt={"디테일 페이지"}
          style={{ objectFit: "cover", filter: "brightness(50%)" }}
          fill
        />
      </S.RightWrapper>
      <S.LeftWrapper>
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
          <S.YouTubeWrapper>
            <YouTube
              videoId={videoId}
              opts={{
                width: "704",
                height: "396",
                playerVars: {
                  autoplay: 1,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
              onEnd={(e) => {
                e.target.stopVideo(0);
              }}
            />
          </S.YouTubeWrapper>
          <S.DecsLong>
            <pre>
              {data?.properties?.FamousLine?.rich_text[0]?.text?.content}
            </pre>
          </S.DecsLong>
        </S.DecsWrapper>
      </S.LeftWrapper>

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
      <S.LinkWrapper>
        <SpotifyIcon
          onClick={() => window.open(data.properties.Ost.url)}
          className="spotiIcon"
        />
        <WatchPediaIcon
          onClick={() => window.open(data.properties.WatchaPedia.url)}
          className="wpIcon"
        />
      </S.LinkWrapper>
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
