import { FunctionComponent, useCallback } from "react";
import TopNavigation from "../components/TopNavigation";
import { useNavigate } from "react-router-dom";
import styles from "./UserHomepage.module.css";

const UserHomepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.userHomepage}>
      <TopNavigation
        adminName="(User name)"
        logoTop="unset"
        logoPosition="unset"
      />
      <section className={styles.sideMenuParent}>
        <div className={styles.sideMenu}>
          <div className={styles.menuIconParent}>
            <div className={styles.menuIcon} />
            <div className={styles.frameWrapper}>
              <div className={styles.image3Parent}>
                <img
                  className={styles.image3Icon}
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
                <div className={styles.assignedTasksWrapper}>
                  <div className={styles.assignedTasks}>Assigned Tasks</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sideMenuInner}>
            <div
              className={styles.image4Parent}
              onClick={onFrameContainerClick}
            >
              <img
                className={styles.image4Icon}
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
              <div className={styles.logOutWrapper}>
                <div className={styles.logOut}>Log out</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.welcomeBackUserNameParent}>
                      <div className={styles.welcomeBackUser}>
                        Welcome back, (User name)
                      </div>
                      <div className={styles.assignedTasksContainer}>
                        <h1 className={styles.assignedTasks1}>
                          Assigned Tasks
                        </h1>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.twoOrangeWorksheetsWithTas}
                    loading="lazy"
                    alt=""
                    src="/two-orange-worksheets-with-tasks@2x.png"
                  />
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.companyName}>Company Name</div>
                <div className={styles.companyNameHeader}>
                  <div className={styles.companyName1}>Company Name</div>
                </div>
                <div className={styles.companyNameHeader1}>
                  <div className={styles.companyName2}>Company Name</div>
                </div>
                <div className={styles.companyNameFooter}>
                  <div className={styles.companyNameWrapper}>
                    <div className={styles.companyName3}>Company Name</div>
                  </div>
                  <div className={styles.companyName4}>Company Name</div>
                </div>
                <div className={styles.companyName5}>Company Name</div>
              </div>
            </div>
            <div className={styles.submissionBackgroundParent}>
              <textarea
                className={styles.submissionBackground}
                rows={6}
                cols={25}
              />
              <button className={styles.submitParent}>
                <div className={styles.submit}>submit</div>
                <img
                  className={styles.paperPlaneIcon}
                  alt=""
                  src="/paper-plane@2x.png"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.twoOrangeWorksheetsWithTasWrapper}>
          <img
            className={styles.twoOrangeWorksheetsWithTas1}
            loading="lazy"
            alt=""
            src="/two-orange-worksheets-with-tasks-1@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default UserHomepage;
