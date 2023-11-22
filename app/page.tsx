import Home from "@/components/Home";
import { listProps } from "@/types";
import CustomAxios from "@/utils/lib/CustomAxios";

export default async function HomePage() {
  const { data } = await CustomAxios.post("");
  const list: listProps[] = data.results;
  return <Home list={list} />;
}
