import Home from '@/components/Home'
import { Props } from '@/types/common'
import { WtmListType, getWtmData } from 'wtm-api'

export default async function HomePage({ params: { name } }: Props) {
  const list: WtmListType[] = await getWtmData()
  console.log(list)

  return <Home initList={list} />
}
