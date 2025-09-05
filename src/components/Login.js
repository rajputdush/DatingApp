
// import "./AuthForm.css"; // Optional for extra styles
import { useState } from "react";
import { Link} from "react-router-dom";

const AuthForm = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="d-flex align-items-center justify-content-center w-100 vh-100 z-0 position-relative ">
    <div className={`container fade-in fixed-top w-100  ${isActive ? "active" : ""}`} id="container">
      <div className="form-container  sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <Link to="/" className="icon"
              ><i className="fa-brands fa-google-plus-g"></i
            ></Link>
            <Link to="/" className="icon"><i className="fa-brands fa-facebook-f"></i></Link>
            <Link to="/" className="icon"><i className="fa-brands fa-github"></i></Link>
            <Link to="/" className="icon"
              ><i className="fa-brands fa-linkedin-in"></i
            ></Link>
          </div>
          <span>or use your email for registeration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <Link to="/" className="icon"
              ><i className="fa-brands fa-google-plus-g"></i
            ></Link>
            <Link to="/" className="icon"><i className="fa-brands fa-facebook-f"></i></Link>
            <Link to="/" className="icon"><i className="fa-brands fa-github"></i></Link>
            <Link to="/" className="icon"
              ><i className="fa-brands fa-linkedin-in"></i
            ></Link>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Link to="/">Forget Your Password?</Link>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login" onClick={() => setIsActive(false)} >Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button className="hidden" id="register"onClick={() => setIsActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default AuthForm;
