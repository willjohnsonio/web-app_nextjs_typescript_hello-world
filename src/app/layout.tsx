import "../styles/styles.css";
import React, { PropsWithChildren } from "react";
import { PageLayout } from "@/components/page-layout";
import { siteMetadata } from "@/components/page-head";
import { PreloadResources } from "@/app/preload-resources";
import { UserProvider } from "@auth0/nextjs-auth0/client"
import { ThemeProvider } from "next-themes";

export const metadata = siteMetadata;

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <PreloadResources />
      <body>
        <UserProvider>
          <PageLayout>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >{children}
          </ThemeProvider></PageLayout>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
