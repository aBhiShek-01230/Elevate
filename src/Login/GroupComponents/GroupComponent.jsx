import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";
import email from "/group.svg"

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={[styles.emailParent, className].join(" ")}>
      <div className={styles.email}>Email</div>
      <div className={styles.emailField}>
        <div className={styles.emailMessage}>
          <img className={styles.message1Icon} alt="" src={email} />
        </div>
        <input
          className={styles.enterYourEmail}
          placeholder="Enter your email address"
          type="text"
        />
      </div>
      <div className={styles.componentChild} />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
