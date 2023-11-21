import { Header } from "@/components/common";
import RecoilRootProvider from "@/utils/recoilRootProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WTM",
  description: "오늘 볼 영화/드라마를 추천해주는 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className} suppressHydrationWarning={true}>
        <RecoilRootProvider>
          <Header />
          {children}
        </RecoilRootProvider>
      </body>
    </html>
  );
}
