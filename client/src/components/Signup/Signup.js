import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import illustration from "../../assets/images/undraw_launching_re_tomg.svg";
import google from "../../assets/images/1534129544.svg";
import facebook from "../../assets/images/icons8-facebook.svg";

import "./Signup.css";

const Signup = () => {
  return (
    <div className="sign-up">
      <div className="illustration">
        <img src={illustration} alt="launch" />
      </div>
      <div className="content">
        <h1>Sign Up</h1>
        <form action="/signup">
          <div className="body">
            <div className="name">
              <label htmlFor="#name">Name</label>
              <br />
              <input type="text" id="name" required />
            </div>
            <div className="email">
              <label htmlFor="#email">Email</label>
              <br />
              <input type="email" id="email" required />
            </div>
            <div className="password">
              <label htmlFor="#password">Password</label>
              <br />
              <input type="password" id="password" required />
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" name="terms" id="terms" required />
            <label htmlFor="#terms">
              I have read and agree the <Link to="#">terms and conditions</Link>.
            </label>
          </div>
          <p><span>Sign up with</span></p>
          <div className="other">
            <button type="button" className="google"><img src={google} alt="google" />Google</button>
            <button type="button" className="facebook"><img src={facebook} alt="facebook" />Facebook</button>
          </div>
          <button type="submit">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
