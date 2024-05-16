import Home from '@/components/Home'
import { Props } from '@/types/common'
import { WtmListType, getWtmData } from 'wtm-api'

export default async function HomePage({ params: {} }: Props) {
  const list: WtmListType[] = await getWtmData()

  return <Home initList={list} />
}
