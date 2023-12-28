import { SpotifyIcon, GithubIcon, GmailIcon } from "@/assets/svg";
import { useVisible } from "@/hooks/useVisible";
import * as S from "./styled";

const Footer = () => {
  const direct = (name: string) => window.open(name);
  const [ref, visible] = useVisible();

  return (
    <S.Footer
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(-20px)",
      }}
      ref={ref}
    >
      <SpotifyIcon
        onClick={() =>
          direct(
            "https://open.spotify.com/user/31pfopcom3ygu2squf5awfc2fha4?si=5d69f922e3414787"
          )
        }
      />
      <GithubIcon onClick={() => direct("https://github.com/HWANBINYOO")} />
      <GmailIcon onClick={() => direct("mailto:dngh0825@gmail.com")} />
    </S.Footer>
  );
};

export default Footer;
