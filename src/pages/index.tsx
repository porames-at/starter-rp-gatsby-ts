import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { RPConfig } from "@react-pdf-kit/viewer";
import { LazyAppPdfViewer } from "../components/LazyAppPdfViewer";

const IndexPage: React.FC<PageProps> = () => {
  const isSSR = typeof window === "undefined";
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <RPConfig workerUrl={'/pdf.worker.min.mjs'}>
            <div className="container">
              <h1>RP Starter Toolkit: Gatsby + TypeScript</h1>
              <br />
              <h2>Default Toolbar</h2>
              <LazyAppPdfViewer />
              <h2>Without Toolbar</h2>
              <LazyAppPdfViewer
                showToolbar={false}
                defaultLayoutProps={{
                  style: { width: "100%", height: "550px" },
                }}
              />
              <h2>Mobile</h2>
              <LazyAppPdfViewer
                defaultLayoutProps={{
                  style: { width: "500px" },
                }}
              />
            </div>
          </RPConfig>
        </React.Suspense>
      )}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
