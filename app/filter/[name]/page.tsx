import CustomAxios from "@/utils/lib/CustomAxios";
import Home from "@/components/Home";
import { listProps } from "@/types";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WTM | Filter",
  description: "오늘 볼 영화/드라마를 추천해주는 사이트",
};

export const FilterPage = async ({ params: { name } }: Props) => {
  const list: listProps[] = await getList(decodeParams(name));
  return <Home list={list} />;
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
    const { data } = await CustomAxios.post(
      `/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
      {
        filter: {
          and: objectArray,
        },
      }
    );
    const list = data.results;

    return list;
  } catch (e) {
    console.log(e);
    return;
  }
};

export default FilterPage;
