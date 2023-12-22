import { listProps } from "@/types";
import Home from "@/components/Home";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { Metadata } from "next";
import { getSearchList } from "@/api/list";

export const metadata: Metadata = {
  title: "Search",
};

export const SearchPage = async ({ params: { name } }: Props) => {
  const list: listProps[] = await getSearchList(decodeParams(name));

  return <Home initList={list} />;
};

export default SearchPage;
