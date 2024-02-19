import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: "CoastWays Logistics",
  description: "Delivering peace of mind",
};



const IBM = IBM_Plex_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"]
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async type="text/javascript" src="/scripts/tawkChat.js"></script>
      </head>
      <body className={IBM.className}>
        {children}


      </body>



    </html>
  );
}
