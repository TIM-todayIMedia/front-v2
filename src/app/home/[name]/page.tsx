import { notionAllData } from "@/api/list";
import Home from "@/components/Home";

export default async function HomePage() {
  const list = await notionAllData();

  return <Home initList={list} />;
}
