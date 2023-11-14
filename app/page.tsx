import CustomAxios from "@/utils/lib/CustomAxios";
import Image from "next/image";

export default async function Home() {
  const list: any = await getData();
  console.log(list);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}

export async function getData() {
  const { data } = await CustomAxios.post(
    `/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
    {}
  );
  const list = data.results;
  return {
    props: {
      list,
    },
  };
}
