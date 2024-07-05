import { FunctionComponent, useCallback } from "react";
import TopNavigation from "../components/TopNavigation";
import { useNavigate } from "react-router-dom";
import styles from "./AdminHomepage1.module.css";

const AdminHomepage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.adminHomepage}>
      <TopNavigation
        adminName="(Admin name)"
        logoTop="0"
        logoPosition="sticky"
      />
      <section className={styles.menuAndContent}>
        <div className={styles.sideMenu}>
          <div className={styles.menuOptions}>
            <div className={styles.menuOptionsInner}>
              <div className={styles.controlPanelParent}>
                <img
                  className={styles.controlPanelIcon}
                  loading="lazy"
                  alt=""
                  src="/control-panel@2x.png"
                />
                <div className={styles.dashboardWrapper}>
                  <a className={styles.dashboard}>Dashboard</a>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.peopleIconParent}>
                <div className={styles.peopleIcon} />
                <div className={styles.frameWrapper}>
                  <div className={styles.peopleParent}>
                    <img
                      className={styles.peopleIcon1}
                      loading="lazy"
                      alt=""
                      src="/people@2x.png"
                    />
                    <div className={styles.usersWrapper}>
                      <a className={styles.users}>Users</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div
                  className={styles.todoListParent}
                  onClick={onFrameContainerClick}
                >
                  <img
                    className={styles.todoListIcon}
                    loading="lazy"
                    alt=""
                    src="/todo-list@2x.png"
                  />
                  <div className={styles.tasksWrapper}>
                    <div className={styles.tasks}>Tasks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sideMenuInner}>
            <div className={styles.logoutRoundedParent}>
              <img
                className={styles.logoutRoundedIcon}
                loading="lazy"
                alt=""
                src="/logout-rounded@2x.png"
              />
              <div
                className={styles.logOutWrapper}
                onClick={onFrameContainerClick1}
              >
                <div className={styles.logOut}>Log out</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.userInformation}>
            <h1 className={styles.users1}>Users</h1>
            <div className={styles.userDetail}>
              <div className={styles.nameRowParent}>
                <div className={styles.nameRow}>
                  <div className={styles.nameCell}>
                    <a className={styles.name}>Name</a>
                  </div>
                  <div className={styles.fullNameRow}>
                    <div className={styles.firstName}>
                      <input
                        className={styles.firstName1}
                        placeholder="First"
                        type="text"
                      />
                    </div>
                    <div className={styles.lastName}>
                      <input
                        className={styles.last}
                        placeholder="Last"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.emailRow}>
                  <div className={styles.emailCell}>
                    <a className={styles.email}>Email</a>
                  </div>
                  <div className={styles.email1}>
                    <input
                      className={styles.usergmailcom}
                      placeholder="user@.gmail.com"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.details}>
                  <div className={styles.departmentRow}>
                    <div className={styles.departmentPhoneRow}>
                      <div className={styles.departmentPhoneCell}>
                        <a className={styles.department}>Department</a>
                      </div>
                      <input className={styles.department1} type="text" />
                    </div>
                    <div className={styles.usernamePasswordRow}>
                      <div className={styles.username}>Username</div>
                      <input className={styles.passwordInput} type="text" />
                    </div>
                  </div>
                  <div className={styles.departmentRow1}>
                    <div className={styles.frameGroup}>
                      <div className={styles.phoneWrapper}>
                        <div className={styles.phone}>Phone</div>
                      </div>
                      <div className={styles.phone1}>
                        <input
                          className={styles.phoneValue}
                          placeholder="### ### ####"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={styles.passwordParent}>
                      <div className={styles.password}>Password</div>
                      <div className={styles.passwordWrapper}>
                        <input
                          className={styles.password1}
                          placeholder="************"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dateRow}>
                  <div className={styles.requiredCompletionDate}>
                    Required Completion Date
                  </div>
                  <div className={styles.dateInput}>
                    <input
                      className={styles.dateInputChild}
                      placeholder="MM/DD/YY"
                      type="text"
                    />
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/calendar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHomepage1;
