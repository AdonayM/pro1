import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TopNavigation.module.css";

export type TopNavigationType = {
  className?: string;
  adminName?: string;

  /** Style props */
  logoTop?: CSSProperties["top"];
  logoPosition?: CSSProperties["position"];
};

const TopNavigation: FunctionComponent<TopNavigationType> = ({
  className = "",
  adminName,
  logoTop,
  logoPosition,
}) => {
  const topNavigationStyle: CSSProperties = useMemo(() => {
    return {
      top: logoTop,
      position: logoPosition,
    };
  }, [logoTop, logoPosition]);

  return (
    <header
      className={[styles.topNavigation, className].join(" ")}
      style={topNavigationStyle}
    >
      <a className={styles.logo}>
        <p className={styles.p}>{`        `}</p>
        <p className={styles.logo1}> logo</p>
      </a>
      <div className={styles.topNavigationInner}>
        <div className={styles.frameParent}>
          <div className={styles.adminNameWrapper}>
            <a className={styles.adminName}>{adminName}</a>
          </div>
          <img
            className={styles.iconWithAPerson}
            loading="lazy"
            alt=""
            src="/icon-with-a-person@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
