import Home from '@/components/Home'
import { Props } from '@/types/common'
import { decodeParams } from '@/utils/decodeParams'
import { Metadata } from 'next'
import { wtm } from 'wtm-sdk'

export const metadata: Metadata = {
  title: 'Search',
}

export const SearchPage = async ({ params: { name } }: Props) => {
  const list = await wtm.getSearchData(decodeParams(name))

  return <Home initList={list} />
}

export default SearchPage
