import { listProps } from "@/types";
import CustomAxios from "@/utils/lib/CustomAxios";
import Home from "@/components/Home";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WTM | Search",
  description: "오늘 볼 영화/드라마를 추천해주는 사이트",
};

export const SearchPage = async ({ params: { name } }: Props) => {
  const list: listProps[] = await getList(decodeParams(name));

  return <Home list={list} />;
};

export const getList = async (name: string) => {
  try {
    const { data } = await CustomAxios.post(
      `/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
      {
        filter: {
          property: "Name",
          title: {
            contains: name,
          },
        },
      }
    );
    const list = data.results;

    return list;
  } catch (e) {
    console.log(e);
    return {};
  }
};

export default SearchPage;
