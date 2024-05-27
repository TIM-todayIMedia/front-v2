import { Metadata } from 'next'
import { CategoryType, TagType, WtmListType, getWtmFilterData } from 'wtm-api'
import Home from '@/components/Home'
import { decodeParams } from '@/utils/decodeParams'

export const metadata: Metadata = {
  title: 'Filter',
}

type Props = {
  searchParams: {
    [key: string]: string
    tag: TagType
    categorys: string
  }
}

export const FilterPage = async ({
  searchParams: { tag, categorys },
}: Props) => {
  const list: WtmListType[] = await getWtmFilterData(
    tag,
    decodeParams(categorys).split(' ') as CategoryType[]
  )

  return <Home initList={list} />
}

export default FilterPage
