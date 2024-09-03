import logo from "/logo.svg"
import GroupComponent from "../GroupComponents/GroupComponent";
import Saly10Icon from "../Saly10Icon/Saly10Icon";
import styles from "./Login.module.css";
import password from "/padlock-11.svg"
import visibility from "/invisible-11.svg"
import fb from "/fb.svg"
import apple from "/apple.svg"
import google from "/google.svg"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const acc = "Don't have Account? ";
  const recLogo  = "Elev";
  
  return (
    <div className={styles.login3}>
      {/* Left Side */}
      <div className={styles.main}>
        <div className={styles.yourLogoParent}>
          <a className={styles.yourLogo}><img src={logo} alt="" /></a>
          {/* Login Container */}
          <div className={styles.loginFormContainer}>
            <div className={styles.signInTitleContainerParent}>
              <div className={styles.signInTitleContainer}>
                <div className={styles.signInTitle}>
                  <h2 className={styles.signIn}>Hi, Welcome Back!</h2>
                  <div className={styles.ifYouDontHaveAnAccountRParent}>
                    <div className={styles.ifYouDont}>
                     {acc}
                     <span className={styles.registerHere} onClick={()=>navigate("/register")}>
                         Register here !
                      </span>
                    </div>
                   
                      
                      
                   
                  </div>
                </div>
              </div>
              <GroupComponent />

              {/* password */}
              <div className={styles.passwordInput}>
                <div className={styles.passwordLabel}>
                  <div className={styles.password}>Password</div>
                </div>
                <div className={styles.passwordField}>
                  <div className={styles.passwordContent}>
                    <div className={styles.passwordIconContainerParent}>
                      <div className={styles.passwordIconContainer}>
                        <img
                          className={styles.padlock1Icon}
                          loading="lazy"
                          alt=""
                          src={password}
                        />
                      </div>
                      <div className={styles.enterYourPassword}>
                        <input type="password" placeholder="Enter your Password" style={{color:"black"}}/>
                      </div>
                    </div>
                    <img
                      className={styles.invisible1Icon}
                      loading="lazy"
                      alt=""
                      src={visibility}
                    />
                  </div>
                  <div className={styles.passwordFieldChild} />
                </div>
                <div className={styles.rememberForgotPassword}>
                  <div className={styles.rememberForgotContainer}>
                    <div className={styles.rememberMe}>
                      <input
                        className={styles.rememberMeCheckbox}
                        type="checkbox"
                      />
                      <div className={styles.rememebrMe}>Rememebr me</div>
                    </div>
                    <div className={styles.forgotPassword}>
                      Forgot Password ?
                    </div>
                  </div>
                </div>
              </div>

               {/* bottom */}
              <div className={styles.frameParent}>
                <button className={styles.rectangleParent} onClick={()=>navigate("/")}>
                  <div className={styles.frameChild} />
                  <div className={styles.login}>Login</div>
                </button>
                <div className={styles.socialLogin}>
                  <div className={styles.socialLoginOptions}>
                    <div className={styles.socialLoginTitle}>
                      <div className={styles.orContinueWith}>
                        or continue with
                      </div>
                    </div>
                    <div className={styles.socialLoginButtons}>
                      <div className={styles.facebookLogin}>
                        <img
                          className={styles.facebookIcon}
                          loading="lazy"
                          alt=""
                          src={fb}
                        />
                      </div>
                      <img
                        className={styles.appleIcon}
                        loading="lazy"
                        alt=""
                        src={apple}
                      />
                      <img
                        className={styles.googleIcon}
                        loading="lazy"
                        alt=""
                        src={google}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    {/* rectangle Group */}
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
         
            <div className={styles.companyName}>
              <Saly10Icon />
            </div>
         
    
        <div className={styles.copyright}>
          <h1 className={styles.signInTo}> <span style={{ color: '#6DB6DF' }}>{recLogo}</span>ate</h1>
          <div className={styles.loremIpsumIs}>Discover, Learn, and Grow with Elevete</div>
        </div>
      </div>
    </div>
  );
}
export default Login;
