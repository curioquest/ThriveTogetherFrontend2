import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    e.target.reset();
    // navigate("/")
  };

  return (
    <div className="content-container bg-text rounded-edges d-flex justify-content-center">
      <form onSubmit={(e) => handleSubmit(e)} style={{width: "750px"}}>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            name="username"
            type="text"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
