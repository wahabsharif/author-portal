import type { Metadata } from "next";
import "@/styles/globals.css";
// import { AuthProvider } from "@/contexts/AuthContext";
import ReduxProvider from "../redux/ReduxProvider";

export const metadata: Metadata = {
  title: "Author Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <AuthProvider></AuthProvider> */}
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
