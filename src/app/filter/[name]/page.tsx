import Home from "@/components/Home";
import { listProps } from "@/types";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { Metadata } from "next";
import { getFilterList } from "@/api/list";

export const metadata: Metadata = {
  title: "Filter",
};

export const FilterPage = async ({ params: { name } }: Props) => {
  const list: listProps[] = await getFilterList(decodeParams(name));

  return <Home initList={list} />;
};

export default FilterPage;
