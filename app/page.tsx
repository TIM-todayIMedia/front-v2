import { listProps } from "@/types";
import CustomAxios from "@/utils/lib/CustomAxios";

export default async function Home() {
  const { data } = await CustomAxios.post(
    `/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
    {}
  );
  const list: listProps[] = data.results;
  console.log(list);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
