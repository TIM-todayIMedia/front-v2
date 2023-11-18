"use client";
import { imgsAtom } from "@/atom";
import { listProps } from "@/types";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { ListBox } from "../common";
import * as S from "./styled";

const Home = ({ list }: { list: listProps[] }) => {
  const setImgsArr = useSetRecoilState(imgsAtom);
  useEffect(() => {
    setImgsArr(
      list.map((i) => i.cover?.external?.url || i.cover?.file?.url || "")
    );
  }, []);

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
