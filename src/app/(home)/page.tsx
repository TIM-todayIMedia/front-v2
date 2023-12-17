import { getAllList } from "@/api/list";
import Home from "@/components/Home";
import { listProps } from "@/types";

export default async function HomePage() {
  const list: listProps[] = await getAllList();

  return <Home initList={list} />;
}
