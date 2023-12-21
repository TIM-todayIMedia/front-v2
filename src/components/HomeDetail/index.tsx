"use client";
import { listProps } from "@/types";
import * as S from "./styled";
import Image from "next/legacy/image";
import { SpotifyIcon, WatchPediaIcon } from "@/assets/svg";
import { CategoryBox } from "../common";
import { CategoryColorArr } from "@/utils/CategoryArray";
import YouTube from "react-youtube";
import { useCallback, useMemo } from "react";

const youtubeOpts = {
  width: "704",
  height: "396",
  playerVars: {
    autoplay: 1,
    rel: 0,
    modestbranding: 1,
  },
};

const HomeDetail = ({ data }: { data: listProps }) => {
  const videoId = useMemo(() => {
    return (data?.properties?.Trailer.url.match(
      /^.*((youtube.\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    ) ?? [])[7];
  }, [data?.properties?.Trailer.url]);
  const ImageUrl = data?.cover?.external?.url ?? data?.cover?.file?.url ?? "";

  const webSiteLink = useCallback((link: string) => {
    return window.open(link);
  }, []);

  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <Image
          src={ImageUrl}
          alt={"디테일 페이지 이미지"}
          style={{ filter: "brightness(80%)" }}
          layout={"fill"}
        />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.MiddleWrapper>
          <S.TitleWrapper>
            <S.Title>{data?.properties?.Name?.title[0]?.text?.content}</S.Title>
            <S.LinkWrapper>
              <SpotifyIcon
                onClick={() => webSiteLink(data.properties.Ost.url)}
                className="spotifyIcon"
              />
              <WatchPediaIcon
                onClick={() => webSiteLink(data.properties.WatchaPedia.url)}
                className="wpIcon"
              />
            </S.LinkWrapper>
          </S.TitleWrapper>
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
              opts={youtubeOpts}
              onEnd={(e) => e.target.stopVideo(0)}
            />
          </S.YouTubeWrapper>
          <S.DecsLong>
            <pre>
              {data?.properties?.FamousLine?.rich_text[0]?.text?.content}
            </pre>
          </S.DecsLong>
        </S.DecsWrapper>
      </S.RightWrapper>

      <S.MiddleBottom>
        <S.Grade>
          {data?.properties.Grade.multi_select.map((GradeItem) => (
            <span key={GradeItem.id}>
              <span className="myScore">{GradeItem.name}</span>
              {`/5`}
            </span>
          ))}
        </S.Grade>
        <S.CategoryBtns>
          {data?.properties.Category.multi_select.map((categoryItem) => (
            <CategoryBox
              key={categoryItem.id}
              color={CategoryColorArr[categoryItem.color] ?? categoryItem.color}
              name={categoryItem.name}
              fontSize={"15px"}
            />
          ))}
        </S.CategoryBtns>
      </S.MiddleBottom>
      <S.DetailImagOverlay>
        <Image
          src={ImageUrl}
          alt={"디테일 페이지 오버레이 이미지"}
          className={"detailImg"}
          layout={"fill"}
        />
      </S.DetailImagOverlay>
    </S.Wrapper>
  );
};

export default HomeDetail;
