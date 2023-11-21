import CustomAxios from "@/utils/lib/CustomAxios";
import HomeDetail from "@/components/HomeDetail";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WTM | Detail",
  description: "오늘 볼 영화/드라마를 추천해주는 사이트",
};

export const DetailPage = async ({ params: { name } }: Props) => {
  const detailData = await getPost(decodeParams(name));
  return <HomeDetail data={detailData} />;
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
