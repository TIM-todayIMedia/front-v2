import CustomAxios from "@/utils/lib/CustomAxios";
import Home from "@/components/Home";
import { Header, Shead } from "@/components/common";
import { listProps } from "@/types";

export const FilterPage = async ({
  params: { name },
}: {
  params: { name: string };
}) => {
  const list: listProps[] = await getList(name);
  return (
    <>
      <Shead seoTitle={"검색페이지"} />
      <Header />
      <Home list={list} />
    </>
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
