import CustomAxios from "@/utils/lib/CustomAxios";
import Home from "@/components/Home";
import { listProps } from "@/types";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { Metadata } from "next";
import HomeLoadingPage from "./loading";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Filter",
};

export const FilterPage = async ({ params: { name } }: Props) => {
  const list: listProps[] = await getList(decodeParams(name));
  return (
    <Suspense fallback={<HomeLoadingPage />}>
      <Home list={list} />
    </Suspense>
  );
};

export const getList = async (names: string) => {
  const ArrayNames = names.split(" ");
  let objectArray: object[] = [];
  ArrayNames.map((i) => {
    if (i === "영화" || i === "드라마") {
      objectArray.push({
        property: "Tag",
        select: {
          equals: i,
        },
      });
    } else {
      objectArray.push({
        property: "Category",
        multi_select: {
          contains: i,
        },
      });
    }
  });

  try {
    const { data } = await CustomAxios.post("", {
      filter: {
        and: objectArray,
      },
    });
    const list = data.results;

    return list;
  } catch (e) {
    console.log(e);
    return;
  }
};

export default FilterPage;
