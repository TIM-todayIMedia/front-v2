import Home from "@/components/Home";
import { listProps } from "@/types";
import CustomAxios from "@/utils/lib/CustomAxios";
import { Suspense } from "react";
import HomeLoadingPage from "./loading";

export default async function HomePage() {
  const { data } = await CustomAxios.post("");
  const list: listProps[] = data.results;
  return (
    <Suspense fallback={<HomeLoadingPage />}>
      <Home list={list} />
    </Suspense>
  );
}
