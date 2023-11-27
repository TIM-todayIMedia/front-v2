import { listProps } from "@/types";
import CustomAxios from "@/utils/lib/CustomAxios";
import Home from "@/components/Home";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { Metadata } from "next";
import HomeLoadingPage from "./loading";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search",
};

export const SearchPage = async ({ params: { name } }: Props) => {
  const list: listProps[] = await getList(decodeParams(name));

  return (
    <Suspense fallback={<HomeLoadingPage />}>
      <Home list={list} />;
    </Suspense>
  );
};

export const getList = async (name: string) => {
  try {
    const { data } = await CustomAxios.post("", {
      filter: {
        property: "Name",
        title: {
          contains: name,
        },
      },
    });
    const list = data.results;

    return list;
  } catch (e) {
    console.log(e);
    return {};
  }
};

export default SearchPage;
