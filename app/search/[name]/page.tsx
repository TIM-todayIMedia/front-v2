import { Header } from "@/components/common";
import { listProps } from "@/types";
import CustomAxios from "@/utils/lib/CustomAxios";
import Home from "@/components/Home";

export const SearchPage = async ({
  params: { name },
}: {
  params: { name: string };
}) => {
  const list: listProps[] = await getList(decodeURI(name));
  return (
    <>
      <Home list={list} />
    </>
  );
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
