import { decodeParams } from '@/utils/decodeParams'
import { Metadata } from 'next'
import { WtmListType, getWtmFilterData } from 'wtm-api'
import Home from '@/components/Home'

export const metadata: Metadata = {
  title: 'Filter',
}

export interface Props {
  params: {
    names: string[]
  }
}

export const FilterPage = async ({ params: { names } }: Props) => {
  console.log(names)

  const list: WtmListType[] = await getWtmFilterData(
    'category',
    names.map(name => decodeParams(name))
  )

  // console.log(list)

  return <Home initList={list} />
}

export default FilterPage
