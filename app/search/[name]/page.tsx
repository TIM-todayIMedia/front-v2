import { listProps } from "@/types";
import CustomAxios from "@/utils/lib/CustomAxios";
import Home from "@/components/Home";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { Metadata } from "next";
import { legnthRn } from "@/utils/lengthRn";

export const metadata: Metadata = {
  title: "Search",
};

export const SearchPage = async ({ params: { name } }: Props) => {
  const list: listProps[] = await getList(decodeParams(name));
  const rn = legnthRn(list);

  return (
    <Home
      list={list}
      coverImgUrl={
        list[rn]?.cover?.external?.url ?? list[rn]?.cover?.file?.url ?? ""
      }
      coverImgTitle={list[rn]?.properties.Name.title[0].text.content}
    />
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
