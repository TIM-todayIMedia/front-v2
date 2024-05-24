'use client'
import * as S from './styled'
import Image from 'next/legacy/image'
import { BackIcon, SpotifyIcon, WatchPediaIcon } from '@/assets/svg'
import { CategoryBox } from '../common'
import YouTube from 'react-youtube'
import { useCallback, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { CategoryColors, WtmListType } from 'wtm-api'

const youtubeOpts = {
  width: '704',
  height: '396',
  playerVars: {
    autoplay: 1,
    rel: 0,
    modestbranding: 1,
  },
}

const HomeDetail = ({ data }: { data: WtmListType }) => {
  const router = useRouter()
  const videoId = useMemo(() => {
    return (data?.trailer?.match(
      /^.*((youtube.\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    ) ?? [])[7]
  }, [data?.trailer])

  const webSiteLink = useCallback((link: string) => {
    return window.open(link)
  }, [])

  useEffect(() => {
    router.prefetch('/home/1')
  }, [])

  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <Image
          src={data?.thumbnailUrl}
          alt={'디테일 페이지 이미지'}
          style={{ filter: 'brightness(80%)' }}
          layout={'fill'}
        />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.MiddleWrapper>
          <S.TitleWrapper>
            <S.Title>{data?.title}</S.Title>
            <S.LinkWrapper>
              <SpotifyIcon
                onClick={() => webSiteLink(data.ost)}
                className="spotifyIcon"
              />
              <WatchPediaIcon
                onClick={() => webSiteLink(data?.watchaPedia)}
                className="wpIcon"
              />
            </S.LinkWrapper>
          </S.TitleWrapper>
          <S.MiddleTop>
            <S.TitleWrapper>
              <span>
                {`${data?.startDate}`}
                {data?.endDate && ` ~ ${data?.endDate}`}
              </span>
            </S.TitleWrapper>
          </S.MiddleTop>
        </S.MiddleWrapper>

        <S.DecsWrapper>
          <S.DecsLong>
            <div>{data?.described}</div>
          </S.DecsLong>
          <S.YouTubeWrapper>
            <YouTube
              videoId={videoId}
              opts={youtubeOpts}
              onEnd={e => e.target.stopVideo(0)}
            />
          </S.YouTubeWrapper>
          <S.DecsLong>
            <pre>{data?.famousLine}</pre>
          </S.DecsLong>
        </S.DecsWrapper>
      </S.RightWrapper>

      <S.DetailHeader>
        <S.BackIconWrapper
          onClick={() =>
            document.referrer ? router.back() : router.push('/home/1')
          }
        >
          <BackIcon />
        </S.BackIconWrapper>

        <S.MiddleBottom>
          <S.Grade>
            <span>
              <span className="myScore">{data?.grade}</span>
              {`/5`}
            </span>
          </S.Grade>
          <S.CategoryBtns>
            {data?.category?.map((categoryItem, idx) => (
              <CategoryBox
                key={idx}
                color={CategoryColors[categoryItem]}
                name={categoryItem}
                fontSize={'15px'}
              />
            ))}
          </S.CategoryBtns>
        </S.MiddleBottom>
      </S.DetailHeader>

      <S.DetailImagOverlay>
        <Image
          src={data.thumbnailUrl}
          alt={'디테일 페이지 오버레이 이미지'}
          className={'detailImg'}
          layout={'fill'}
        />
      </S.DetailImagOverlay>
    </S.Wrapper>
  )
}

export default HomeDetail
