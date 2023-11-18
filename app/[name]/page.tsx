import CustomAxios from "@/utils/lib/CustomAxios";
import { Shead } from "@/components/common";
import HomeDetail from "@/components/HomeDetail";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";

export const DetailPage = async ({ params: { name } }: Props) => {
  const detailData = await getPost(decodeParams(name));
  return (
    <>
      <Shead seoTitle={"디테일페이지"} />
      <HomeDetail data={detailData} />
    </>
  );
};

export const getPost = async (name: string) => {
  try {
    const { data } = await CustomAxios.post(
      `/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
      {
        filter: {
          property: "Name",
          title: {
            equals: name,
          },
        },
      }
    );
    const detailData = data.results[0];
    return detailData;
  } catch (e) {
    console.log(e);
    return;
  }
};

export default DetailPage;
