import { getAllList, notionAllData } from "@/api/list";
import Home from "@/components/Home";
import { listProps } from "@/types";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default async function HomePage({ params: { name } }: Props) {
  const list: listProps[] = await getAllList(decodeParams(name));
  const list2 = await notionAllData();

  // console.log(list);
  console.log(list2);

  return <Home initList={list2} />;
}
