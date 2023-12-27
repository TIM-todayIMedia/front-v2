import { useVisible } from "@/hooks/useVisible";
import * as S from "./styled";

const TextBox = () => {
  const [ref, visible] = useVisible();

  return (
    <S.TextBoxWrapper
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(50px)",
      }}
      ref={ref}
    >
      <S.TextBoxTitle>
        <span style={{ color: "#dde632" }}>지속적으로 업데이트</span>되고있는
        영화/드라마의 다양한 정보를 확인하세요
      </S.TextBoxTitle>
      <S.TextBoxDesc>
        (제목, 설명, 장르, 평점, 명대사, 개봉일/상영일, 포스터, 예고편,
        왓차피디아, Ost)
      </S.TextBoxDesc>
    </S.TextBoxWrapper>
  );
};

export default TextBox;
