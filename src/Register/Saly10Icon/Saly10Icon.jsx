import PropTypes from "prop-types";
import styles from "./Saly10Icon.module.css";
import banner from "/banner.png"
const Saly10Icon = ({ className = "" }) => {
  return (
    <img
      className={[styles.saly10Icon, className].join(" ")}
      loading="lazy"
      alt=""
      src={banner}
    />
  );
};

Saly10Icon.propTypes = {
  className: PropTypes.string,
};

export default Saly10Icon;
