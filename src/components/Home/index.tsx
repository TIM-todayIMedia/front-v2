'use client'

import { imgAtom } from '@/atom'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { ListBox } from '../common'
import * as SC from '@/components/common/Styles/home'
import * as S from './styled'
import Error404Icon from '@/assets/svg/Error404Icon'
import { getRandomNumFromArrayLength } from '@/utils/getRandomNumFromArrayLength'
import { usePathname } from 'next/navigation'
import { WtmListType } from 'wtm-api'

const Home = ({ initList }: { initList: WtmListType[] }) => {
  const pathname = usePathname()
  const setImgUrl = useSetRecoilState(imgAtom)
  const rn = getRandomNumFromArrayLength(initList)

  useEffect(() => {
    setImgUrl([initList[rn]?.thumbnailUrl ?? '', initList[rn]?.title])
  }, [])

  if (initList?.length <= 0 && pathname !== '/') {
    return (
      <S.EmptyList>
        <Error404Icon />
        <span>찾으시는 드라마/영화가 없습니다 ...</span>
      </S.EmptyList>
    )
  }

  return (
    <SC.Wrapper>
      <SC.ListWrapper>
        {initList?.map((i, idx) => (
          <ListBox
            key={idx}
            cover={i.thumbnailUrl}
            title={i.title}
            categoryArr={i.category}
          />
        ))}
      </SC.ListWrapper>
    </SC.Wrapper>
  )
}

export default Home
