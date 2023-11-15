import { Header } from "@/components/common";
import Home from "@/components/Home";
import { listProps } from "@/types";
import CustomAxios from "@/utils/lib/CustomAxios";

export default async function HomePage() {
  const { data } = await CustomAxios.post(
    `/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
    {}
  );
  const list: listProps[] = data.results;
  return (
    <>
      <Home list={list} />
    </>
  );
}
