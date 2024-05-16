import Home from '@/components/Home'
import { Props } from '@/types/common'
import { decodeParams } from '@/utils/decodeParams'
import { Metadata } from 'next'
import { getWtmSearchData } from 'wtm-api'

export const metadata: Metadata = {
  title: 'Search',
}

export const SearchPage = async ({ params: { name } }: Props) => {
  const list = await getWtmSearchData(decodeParams(name))

  return <Home initList={list} />
}

export default SearchPage
