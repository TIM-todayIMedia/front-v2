import { getDetailData } from "@/api/list";
import HomeDetail from "@/components/HomeDetail";
import { listProps } from "@/types";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const name = params.name;
  const detailData: listProps = await getDetailData(decodeParams(name));
  const previousImages = (await parent).openGraph?.images || [];
  const ImageUrl =
    detailData?.cover?.external?.url ?? detailData?.cover?.file?.url ?? "";

  return {
    title: "Detail",
    openGraph: {
      title: detailData?.properties?.Name?.title[0]?.text?.content + "- WTM",
      description:
        detailData?.properties?.Described?.rich_text[0]?.text?.content,
      images: [ImageUrl, ...previousImages],
    },
  };
}

export const DetailPage = async ({ params: { name } }: Props) => {
  const detailData = await getDetailData(decodeParams(name));
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

export default DetailPage;
