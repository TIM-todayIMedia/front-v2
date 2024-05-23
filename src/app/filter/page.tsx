import { decodeParams } from '@/utils/decodeParams'
import { Metadata } from 'next'
import { TagType, WtmListType, getWtmFilterData } from 'wtm-api'
import Home from '@/components/Home'

export const metadata: Metadata = {
  title: 'Filter',
}

type Props = {
  searchParams: {
    [key: string]: string
    tag: string
    categorys: string
  }
}

export const FilterPage = async ({
  searchParams: { tag, categorys },
}: Props) => {
  console.log(categorys.split(' '))

  // console.log(decodeParams(categorys.map(name => arr.push(decodeParams(name)))))

  const list: WtmListType[] = await getWtmFilterData(
    decodeParams(tag) as TagType,
    decodeParams(categorys).split(' ')
  )

  return <Home initList={list} />
}

export default FilterPage
