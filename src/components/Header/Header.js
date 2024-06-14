"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { EnabledContext } from "../EnabledProvider/EnabledProvider";
import styles from "./Header.module.css";

function Header() {
  const id = React.useId();

  const { enabled, setEnabled } = React.useContext(EnabledContext);

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            setEnabled(!enabled);
          }}
        >
          {enabled ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {enabled ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
