import CustomAxios from "@/utils/lib/CustomAxios";
import { listProps } from "@/types";
import { Shead } from "@/components/common";
import HomeDetail from "@/components/HomeDetail";

export const HomeDetailPage = async ({
  params: { name },
}: {
  params: { name: string };
}) => {
  const detailData = await getPost(name);
  return (
    <>
      <Shead seoTitle={"디테일페이지"} />
      <HomeDetail data={detailData} />
    </>
  );
};

export async function generateStaticParams() {
  const { data } = await CustomAxios.post(
    `/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
    {}
  );
  const list = data.results;

  const paths = list.map((item: listProps) => ({
    params: { name: item.properties.Name.title[0].text.content },
  }));

  return paths;
}

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

export default HomeDetailPage;
