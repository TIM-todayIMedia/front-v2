import { useVisible } from "@/hooks/useVisible";
import * as S from "./styled";

const TextBox = ({ title, desc }: { title: string; desc: string }) => {
  const [ref, visible] = useVisible();

  return (
    <S.TextBoxWrapper
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(50px)",
      }}
      ref={ref}
    >
      <S.TextBoxTitle>{title}</S.TextBoxTitle>
      <S.TextBoxDesc>{desc}</S.TextBoxDesc>
    </S.TextBoxWrapper>
  );
};

export default TextBox;
