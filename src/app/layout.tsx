import Link from "next/link";
import "./globals.css";
import {Metadata} from "next";

export const metaData:Metadata={
  title:'{영화명}:영화위키',
  description: '일별 박스 오피스를 확인하고 어쩌구 저쩌구:',
  openGraph: {
    title:'영화위키',
    description:'일별 박스 오피스를 확인하고 어쩌구 저쩌구:',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  );
}
