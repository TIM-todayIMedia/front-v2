'use client'
import * as S from './styled'
import Image from 'next/legacy/image'
import { CategoryBox } from '..'
import { useRouter } from 'next/navigation'
import { CategoryColors, CategoryType } from 'wtm-api'

const ListBox = ({
  cover,
  title,
  categoryArr,
}: {
  cover: string
  title: string
  categoryArr: CategoryType[]
}) => {
  const router = useRouter()
  const detailDirectRoute = () => router.push(`/detail/${title}`)

  return (
    <S.Wrapper onClick={detailDirectRoute}>
      <Image
        src={cover}
        alt="포스터 이미지"
        priority={true}
        layout={'fixed'}
        width={200}
        height={296}
        className={'listBoxImag'}
      />
      <S.Decs>
        <S.Title>{title}</S.Title>
        <S.CategorysWrapper>
          {categoryArr?.map((categoryName, idx) => (
            <CategoryBox
              key={idx}
              color={CategoryColors[categoryName]}
              name={categoryName}
              fontSize={'0.8rem'}
            />
          ))}
        </S.CategorysWrapper>
      </S.Decs>
    </S.Wrapper>
  )
}

export default ListBox
