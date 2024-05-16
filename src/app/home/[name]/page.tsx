import Home from '@/components/Home'
import { Props } from '@/types/common'
import { WtmListType, getWtmData, getWtmFilterData } from 'wtm-api'

export default async function HomePage({ params: {} }: Props) {
  const list: WtmListType[] = await getWtmData()
  const imgList: string[] = await getWtmFilterData('thumbnailUrl')

  return <Home initList={list} imgList={imgList} />
}
