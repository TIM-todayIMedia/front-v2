import { getAllList } from "@/api/list";
import Home from "@/components/Home";
import { listProps } from "@/types";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";

export default async function HomePage({ params: { name } }: Props) {
  const list: listProps[] = await getAllList(decodeParams(name));

  return <Home initList={list} />;
}
