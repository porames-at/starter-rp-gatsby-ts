import React, { FC } from "react";
import {
  RPProvider,
  RPLayout,
  RPPages,
  RPLayoutProps,
  RPProviderProps,
} from "@react-pdf-kit/viewer";

type IProps = {
  showToolbar: boolean;
  providerProps: Omit<RPProviderProps, "src">;
  defaultLayoutProps: RPLayoutProps;
};

const AppPdfViewer: FC<Partial<IProps>> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { showToolbar = true, providerProps, defaultLayoutProps } = props;

  return (
    <RPProvider
      src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
      {...providerProps}
    >
      {showToolbar ? (
        <RPLayout toolbar {...defaultLayoutProps}>
          <RPPages />
        </RPLayout>
      ) : (
        <div style={{ width: "100%", height: "550px" }}>
          <RPPages />
        </div>
      )}
    </RPProvider>
  );
};

export default AppPdfViewer;
