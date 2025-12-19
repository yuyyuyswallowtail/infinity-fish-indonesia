import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";

export const metadata: Metadata = {
  title: "Infinity Fish Indonesia",
  description: "Anchored in Quality: Indonesia's Ornamental Fish Supplies, Setting the Standard for Aquatic Excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={"min-h-dvh flex flex-col justify-center items-center gap-8 antialiased"}
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
