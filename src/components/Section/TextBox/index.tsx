import { useVisible } from "@/hooks/useVisivle";
import * as S from "./styled";

const TextBox = ({ title, desc }: { title: string; desc: string }) => {
  const [ref, visible] = useVisible();

  return (
    <S.TextBoxWrapper
      style={{
        transition: visible
          ? "transform 1500ms cubic-bezier(0, 0, 0.5, 1),opacity 1500ms cubic-bezier(0, 0, 0.5, 1),visibility 1500ms cubic-bezier(0, 0, 0.5, 1)"
          : "all 1.5s",
        opacity: visible ? 1 : 0,
      }}
      ref={ref}
    >
      <S.TextBoxTitle>{title}</S.TextBoxTitle>
      <S.TextBoxDesc>{desc}</S.TextBoxDesc>
    </S.TextBoxWrapper>
  );
};

export default TextBox;
