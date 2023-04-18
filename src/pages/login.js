import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AiOutlineEye } from "react-icons/ai";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { httpPost } from "../Action";
import { showError, showSucess } from "../helper/heper";
import { AppContext } from "../helper/context";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const {formData, setFormData, logIn} = useContext(AppContext);


  const navigate = useNavigate()
  // const [formData, setFormData] = useState({ email: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = async (e) => {
    logIn(e)
  };

  return (
    <>
      {/* <ToastContainer/> */}
      <div className="title-bar text-center">
        <h2>Log In</h2>
        <p>Enter your details to log into your account!</p>
      </div>

      <div className="Form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmaillogin">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="e.g. smith@gmail.com"
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Your password</Form.Label>
            <InputGroup className="mb-3 formeye">
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => onChange(e)}
              />
              <InputGroup.Text id="basic-addon2">
                <AiOutlineEye />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Remember me" />
            <Link to="/forget/password">Forgot your password?</Link>
          </Form.Group>
          <Button className="btn btnblack" type="submit" onClick={submit}>
            Log In
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
