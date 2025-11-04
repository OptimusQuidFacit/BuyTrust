import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FormContextProvider from "@/components/utility/providers/FormContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A trusted online shopping platform",
  description: "A trusted platform for online shopping purchases and general commerce, alongside secure financial transactions for small and medium scale enterprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <FormContextProvider>
          <html lang="en">
            <head>
                <link
                rel="icon"
                href="/icon.png"
                type="image/<generated>"
                sizes="<generated>"
              />
            </head>
          
              <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
              >
                      {children}
                      
              </body>
          </html>
        </FormContextProvider>
  );
}
