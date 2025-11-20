import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const sen = Play({
  variable: "--font-sen",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "VinIsA.Dev",
  description: "Dungeons, Dragons & Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sen.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}