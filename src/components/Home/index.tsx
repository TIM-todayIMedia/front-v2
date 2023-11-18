"use client";
import { imgAtom } from "@/atom";
import { listProps } from "@/types";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ListBox } from "../common";
import * as S from "./styled";

const Home = ({ list }: { list: listProps[] }) => {
  const [imgUrl, setImgUrl] = useRecoilState(imgAtom);
  const rn = [Math.floor(Math.random() * (list.length - 1))][0];
  useEffect(() => {
    if (imgUrl.length === 0) {
      setImgUrl([
        list[rn].cover?.external?.url || list[rn].cover?.file?.url || "",
        list[rn].properties.Name.title[0].text.content,
      ]);
    }
  }, [imgUrl, list, rn, setImgUrl]);

  return (
    <S.Wrapper>
      <S.ListWrapper>
        {list ? (
          list.map((i, index) => (
            <ListBox
              key={index}
              cover={i.cover}
              title={i.properties.Name.title[0]?.text.content}
              category={i.properties.Category.multi_select}
            />
          ))
        ) : (
          <p></p>
        )}
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default Home;
