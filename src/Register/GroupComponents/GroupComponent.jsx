import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";
import email from "/group.svg";
// import name from "/user-1.svg"; 

const GroupComponent = ({
  className = "",
  label = "Email",
  placeholder = "Enter your email address",
  icon = email,
  type = "text",
}) => {
  return (
    <div className={[styles.emailParent, className].join(" ")}>
      <div className={styles.email}>{label}</div>
      <div className={styles.emailField}>
        <div className={styles.emailMessage}>
          <img className={styles.message1Icon} alt="" src={icon} />
        </div>
        <input
          className={styles.enterYourEmail}
          placeholder={placeholder}
          type={type}
        />
      </div>
      <div className={styles.componentChild} />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
};

export default GroupComponent;