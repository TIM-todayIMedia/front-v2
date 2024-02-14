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
import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { CategoryType, TitleType, UrlType } from "@/types/databaseObjectKey";

const Home = ({ initList }: { initList: DatabaseObjectResponse[] }) => {
  const setImgUrl = useSetRecoilState(imgAtom);
  const [list] = useState(initList);
  const rn = getRandomNumFromArrayLength(initList);
  const pathname = usePathname();
  console.log(initList[0].properties);

  useEffect(() => {
    const imgTitle = list[rn].properties.Name as TitleType;
    const imgUrl = initList[rn]?.cover as UrlType;
    setImgUrl([imgUrl.external.url, imgTitle.title[0]["plain_text"]]);
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
        {list?.map((i) => {
          const boxTitle = i.properties.Name as TitleType;
          const bixCategory = i.properties.Category as CategoryType;
          return (
            <ListBox
              key={i.id}
              cover={i.cover as UrlType}
              title={boxTitle.title[0]["plain_text"]}
              categorys={bixCategory.multi_select.options}
            />
          );
        })}
      </SC.ListWrapper>
    </SC.Wrapper>
  );
};

export default Home;
