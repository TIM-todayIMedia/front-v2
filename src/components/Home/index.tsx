"use client";
import { imgAtom } from "@/atom";
import { listProps } from "@/types";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { ListBox } from "../common";
import * as SC from "@/components/common/Styles/home";
import * as S from "./styled";
import Error404Icon from "@/assets/svg/Error404Icon";
import { getRandomNumFromArrayLength } from "@/utils/getRandomNumFromArrayLength";
import { usePathname } from "next/navigation";

const Home = ({ initList }: { initList: listProps[] }) => {
  const setImgUrl = useSetRecoilState(imgAtom);
  const [list] = useState(initList);
  const rn = getRandomNumFromArrayLength(initList);
  const pathname = usePathname();

  useEffect(() => {
    setImgUrl([
      initList[rn]?.cover?.external?.url ??
        initList[rn]?.cover?.file?.url ??
        "",
      initList[rn]?.properties.Name.title[0].text.content,
    ]);
  }, []);

  // useEffect(() => {
  //   async function a() {
  //     const data = await getFilterListAction(filterItems.join(" "));
  //     setList(data);
  //   }
  //   a();
  // }, [filterItems]);

  if (list.length <= 0 && pathname !== "/") {
    return (
      <S.EmptyList>
        <Error404Icon />
        <span>찾으시는 드라마/영화가 없습니다 ...</span>
      </S.EmptyList>
    );
  }

  return (
    <SC.Wrapper>
      <SC.ListWrapper>
        {list.map((i) => (
          <ListBox
            key={i.id}
            cover={i.cover}
            title={i.properties.Name.title[0]?.text.content}
            categorys={i.properties.Category.multi_select}
          />
        ))}
      </SC.ListWrapper>
    </SC.Wrapper>
  );
};

export default Home;
