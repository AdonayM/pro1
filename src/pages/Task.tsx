import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Task.module.css";

const Task: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardItemContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoutLabelContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.task}>
      <header className={styles.topNavigation}>
        <h3 className={styles.logo}>
          <p className={styles.p}>{`        `}</p>
          <p className={styles.logo1}> logo</p>
        </h3>
        <div className={styles.userNavigation}>
          <div className={styles.userNameContainerParent}>
            <div className={styles.userNameContainer}>
              <a className={styles.adminName}>(Admin name)</a>
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
      <div className={styles.menuContainer}>
        <div className={styles.sideMenu}>
          <div className={styles.menuItemParent}>
            <div className={styles.menuItem}>
              <div
                className={styles.dashboardItem}
                onClick={onDashboardItemContainerClick}
              >
                <img
                  className={styles.image1Icon}
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
                <div className={styles.dashboardLabel}>
                  <a className={styles.dashboard}>Dashboard</a>
                </div>
              </div>
            </div>
            <div className={styles.usersItem}>
              <div className={styles.usersLabel}>
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className={styles.usersLabelContainer}>
                  <div className={styles.users}>Users</div>
                </div>
              </div>
            </div>
            <div className={styles.tasksItem}>
              <div className={styles.tasksNotification} />
              <div className={styles.tasksLabel}>
                <div className={styles.tasksLabelContainer}>
                  <img
                    className={styles.image3Icon}
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                  <div className={styles.tasksName}>
                    <div className={styles.tasks}>Tasks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.logoutItem}>
            <div
              className={styles.logoutLabel}
              onClick={onLogoutLabelContainerClick}
            >
              <img
                className={styles.image4Icon}
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
              <div className={styles.logoutNameLabel}>
                <div className={styles.logOut}>Log out</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.tasks1}>Tasks</h1>
            <div className={styles.illustration}>
              <img
                className={styles.youngWomanWritingInANotep}
                loading="lazy"
                alt=""
                src="/young-woman-writing-in-a-notepad@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
