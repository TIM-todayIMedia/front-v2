import * as S from './styled'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { SearchIcon, TriangleIcon } from '@/assets/svg'
import CategorySelect from '../CategorySelect'
import { useRecoilValue } from 'recoil'
import { imgAtom } from '@/atom'
import Image from 'next/legacy/image'
import TagBtn from '../TagBtn'
import { isPathnameDetail } from '@/utils/isPathnameDetail'
import { decodeParams } from '@/utils/decodeParams'
import { throttle } from 'lodash'
import { CategoryItems, TagItems } from 'wtm-sdk'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const imgUrl = useRecoilValue(imgAtom)
  const [filterCategoryArray, setFilterCategoryArray] = useState<string[]>([])
  const [filterToggleBtn, setFilterToggleBtn] = useState(false)
  const [searchValue, SetSearchValue] = useState<string>('')
  const [isDetailPage, setIsDetailPage] = useState(false)
  const [isScroll475, setIsScroll475] = useState(false)
  const [field, setField] = useState<string>('')

  useEffect(() => {
    if (isPathnameDetail(pathname)) {
      setIsDetailPage(true)
    } else {
      setIsDetailPage(false)
    }
  }, [pathname])

  useEffect(() => {
    if (pathname.includes('filter')) {
      const CategoryTemp: string[] = []
      const paramsCategoryArr = decodeParams(pathname)
        .replace('/filter/', '')
        .split(' ')
      paramsCategoryArr.map(i => {
        if (i === '영화' || i === '드라마' || i === '예능') {
          setField(i)
        } else {
          CategoryTemp.push(i)
        }
      })
      setFilterCategoryArray(CategoryTemp)
    }
  }, [pathname])

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        const scrollY = window.scrollY || document.documentElement.scrollTop
        if (scrollY >= 475) {
          setIsScroll475(true)
        } else {
          setIsScroll475(false)
        }
      }, 300),
    [isScroll475]
  )

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll)

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [throttledScroll])

  const handleTitleClick = useCallback(() => {
    setField('')
    setFilterCategoryArray([])
    return router.push('/home/1')
  }, [])

  const handleTagBtnClick = (name: string) => {
    handleSubmitBtnClick(name)
    setField(name)
  }

  if (isDetailPage) return <></>

  const handleClick = () => {
    if (!searchValue) {
      router.push('/')
      setFilterCategoryArray([])
    } else {
      router.push(`/search/${searchValue}`)
      setFilterToggleBtn(false)
    }
  }

  const handleCategorySelectClick = (name: string) => {
    if (!filterCategoryArray.includes(name)) {
      setFilterCategoryArray([...filterCategoryArray, name])
      handleSubmitBtnClick(field, [...filterCategoryArray, name])
    } else {
      const arr = filterCategoryArray.filter(i => i !== name)
      handleSubmitBtnClick(field, arr)
      setFilterCategoryArray(arr)
    }
  }

  const handleSubmitBtnClick = (field: string, arr?: string[]) => {
    if (
      arr?.length === 0 ||
      (arr === undefined && filterCategoryArray.length === 0)
    ) {
      setFilterCategoryArray([])
      if (field !== '') {
        return router.push(`/filter/${field}`)
      } else {
        return router.push('/home/1')
      }
    }
    const filterQuery = arr ? arr.join(' ') : filterCategoryArray.join(' ')

    router.push(`/filter/${filterQuery} ${field}`)
  }

  return (
    <S.HeaderWrapper>
      <S.HeaderImg>
        {imgUrl[0] ? (
          <Image
            src={imgUrl[0]}
            priority={true}
            alt={'headerCoverImag'}
            layout={'fill'}
            quality={30}
            unoptimized={true}
            style={{ filter: 'brightness(40%)' }}
            onClick={() => router.push(`/detail/${imgUrl[1]}`)}
          />
        ) : (
          <Image
            src={'/img/basicPoster.webp'}
            priority={true}
            alt={'basicPosterHeaderCoverImag'}
            layout={'fill'}
            quality={30}
            unoptimized={true}
            style={{ filter: 'brightness(40%)' }}
            onClick={() => router.push(`/나의 해방일지`)}
          />
        )}
      </S.HeaderImg>
      <S.HeaderTopWrapper
        style={{
          backgroundColor: isScroll475
            ? 'rgb(0, 0, 0, 0.8)'
            : 'rgb(0, 0, 0, 0)',
        }}
      >
        <S.LeftWrapper>
          <Image
            src={'/img/w.png'}
            alt={'logoImag'}
            layout={'fixed'}
            width={67}
            height={40}
            quality={60}
            onClick={handleTitleClick}
          />
          <S.InputWrapper>
            <input
              type="text"
              placeholder="영화/드라마 이름을 입력하세요"
              value={searchValue}
              onChange={e => SetSearchValue(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') handleClick()
              }}
            />
            <label>
              <SearchIcon />
            </label>
          </S.InputWrapper>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.TagBtns>
            {TagItems.map(item => (
              <TagBtn
                key={item}
                id={item}
                field={field}
                isdefaultChecked={item === '전체'}
                onClick={() => handleTagBtnClick(item === '전체' ? '' : item)}
              />
            ))}
          </S.TagBtns>
          <S.FilterBtn onMouseOver={() => setFilterToggleBtn(true)}>
            카테고리
            <TriangleIcon
              style={{
                transform: `rotate(${filterToggleBtn ? `270deg` : `90deg`})`,
              }}
            />
          </S.FilterBtn>

          {filterToggleBtn && (
            <>
              <S.ModalOverlay onClick={() => setFilterToggleBtn(false)} />
              <S.FilterBox onMouseLeave={() => setFilterToggleBtn(false)}>
                {CategoryItems.map((i, index) => (
                  <CategorySelect
                    onClick={() => handleCategorySelectClick(i)}
                    key={index}
                    name={i}
                    isClicked={filterCategoryArray.includes(i)}
                  />
                ))}
              </S.FilterBox>
            </>
          )}
        </S.RightWrapper>
      </S.HeaderTopWrapper>
    </S.HeaderWrapper>
  )
}

export default Header
