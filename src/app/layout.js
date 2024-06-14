import React from "react";

import Header from "../components/Header";
import EnabledProvider from "../components/EnabledProvider/EnabledProvider";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <EnabledProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </EnabledProvider>
      </body>
    </html>
  );
}

export default RootLayout;
