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
import {
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const Home = ({ initList }: { initList: DatabaseObjectResponse[] }) => {
  const setImgUrl = useSetRecoilState(imgAtom);
  const [list] = useState(initList);
  const rn = getRandomNumFromArrayLength(initList);
  const pathname = usePathname();
  console.log(initList[0].properties);

  type TitleType = Extract<
    DatabaseObjectResponse["properties"][string],
    { type: "title" }
  >;

  useEffect(() => {
    const imgTitle = list[0].properties.Name as TitleType;
    console.log(imgTitle);

    const imgUrl =
      initList[0]?.cover.type === "external"
        ? initList[0]?.cover.external.url
        : initList[0]?.cover?.file?.url;
    setImgUrl([imgUrl, imgTitle.title[0]["plain_text"]]);
  }, []);

  if (list && list.length <= 0 && pathname !== "/") {
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
        {/* {list?.map((i) => (
          <ListBox
            key={i.id}
            cover={i.cover}
            title={i.properties.Name.title[0]?.text.content}
            categorys={i.properties.Category.multi_select}
          />
        ))} */}
      </SC.ListWrapper>
    </SC.Wrapper>
  );
};

export default Home;
