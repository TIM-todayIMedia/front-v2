import { decodeParams } from '@/utils/decodeParams'
import { Metadata } from 'next'
import { CategoryItems, TagType, WtmListType, getWtmFilterData } from 'wtm-api'
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
  console.log(categorys?.split(' '))

  const arr = ['로맨스', '코미디'] // decodeParams(categorys).split(' ')
  const CategoryArr = CategoryItems

  const filterArr1 = CategoryArr.slice(0, CategoryItems.length / 2)
  const filterArr2 = CategoryArr.slice(CategoryItems.length / 2)

  const notInArr = filterArr1.filter(i => !arr.includes(i))
  const notInArr2 = filterArr2.filter(i => !arr.includes(i))

  console.log(filterArr1)
  console.log(notInArr)

  const list: WtmListType[] = await getWtmFilterData('영화', [
    ...notInArr,
    notInArr2,
  ])

  console.log(list)
  return <Home initList={list} />
}

export default FilterPage
