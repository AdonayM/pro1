import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MenuItems.module.css";

export type MenuItemsType = {
  className?: string;
};

const MenuItems: FunctionComponent<MenuItemsType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onTodoItemContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
    <div className={[styles.menuItems, className].join(" ")}>
      <div className={styles.menuContainer}>
        <div className={styles.menuItem}>
          <div className={styles.controlPanelIcon} />
          <div className={styles.controlPanelLabelWrapper}>
            <div className={styles.controlPanelLabel}>
              <img
                className={styles.controlPanelIcon1}
                loading="lazy"
                alt=""
                src="/control-panel@2x.png"
              />
              <div className={styles.dashboardWrapper}>
                <a className={styles.dashboard}>Dashboard</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.peopleItem}>
        <div className={styles.peopleLabel}>
          <img
            className={styles.peopleIcon}
            loading="lazy"
            alt=""
            src="/people@2x.png"
          />
          <div className={styles.usersWrapper}>
            <a className={styles.users}>Users</a>
          </div>
        </div>
      </div>
      <div className={styles.todoItem} onClick={onTodoItemContainerClick}>
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
  );
};

export default MenuItems;
