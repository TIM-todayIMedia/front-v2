import { Header } from "@/components/common";
import RecoilRootProvider from "@/utils/recoilRootProvider";
import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

const do_hyeon = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "WTM | %s",
    default: "WTM",
  },
  applicationName: "WTM",
  description: "오늘 볼 영화/드라마를 찾고싶을때",
  openGraph: {
    title: "WTM",
    description: "오늘 볼 영화/드라마를 찾고싶을때",
    url: "https://tim-v2.netlify.app/",
    images: [
      {
        url: "/img/w.png",
      },
    ],
    locale: "ko",
    type: "website",
  },
  metadataBase: new URL("https://tim-v2.netlify.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={do_hyeon.className}>
        <RecoilRootProvider>
          <Header />
          <Providers>{children}</Providers>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
