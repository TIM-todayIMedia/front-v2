import React from "react";
import Head from "next/head";
import { NextPage } from "next";

const Shead: NextPage<{ seoTitle: string }> = ({ seoTitle }) => {
  return (
    <Head>
      <title>{`TIM | ${seoTitle}`}</title>
      <meta
        name="description"
        content="TIM : today i media 의 약자로 오늘 본 영화/드라마를 기록하는 웹사이트입니다."
      />
      <meta name="author" content="hawnbinyoo" />
      <meta name="keyword" content="frontend, react" />
    </Head>
  );
};

export default Shead;
