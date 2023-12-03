import CustomAxios from "@/utils/lib/CustomAxios";
import HomeDetail from "@/components/HomeDetail";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { Metadata } from "next";
import { listProps } from "@/types";

export const metadata: Metadata = {
  title: "Detail",
};

export const DetailPage = async ({ params: { name } }: Props) => {
  const detailData = await getPost(decodeParams(name));
  return <HomeDetail data={detailData} />;
};

// 베포하면 notion img 유효기간때문에 정적인 데이터를 받아오면 유효기간끝나고 에러뜸
// export async function generateStaticParams() {
//   const { data } = await CustomAxios.post("");
//   const list: listProps[] = data.results;
//   return list.map((i) => ({
//     name: i.properties.Name.title[0].text.content,
//   }));
// }

export const getPost = async (name: string) => {
  try {
    const { data } = await CustomAxios.post("", {
      filter: {
        property: "Name",
        title: {
          equals: name,
        },
      },
    });
    const detailData = data.results[0];
    return detailData;
  } catch (e) {
    console.log(e);
    return;
  }
};

export default DetailPage;
