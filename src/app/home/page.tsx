import Home from '@/components/Home'
import { Props } from '@/types/common'
import { WtmListType, wtm } from 'wtm-sdk'

export default async function HomePage({ params: {} }: Props) {
  const list: WtmListType[] = await wtm.getData()

  return <Home initList={list} />
}
