import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/user.actions";
import Layout from "../Layout";
import "./style.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setMobileNumber("");
  }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
    } else {
      const user = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        mobileNumber,
      };

      dispatch(signup(user));
    }
  };

  return (
    <Layout>
      <Container style={{ marginTop: "110px" }}>
        <Row style={{ marginLeft: "18%" }}>
          <Col>
            <Form data-testid="form" onSubmit={userSignup}>
              <label>First Name</label>
              <br />
              <input
                className="input"
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <br />
              <label className="label">Last Name</label>
              <br />
              <input
                className="input"
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />{" "}
              <br />
              <label className="label">Email</label>
              <br />
              <input
                className="input"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />{" "}
              <br />
              <label className="label">Password</label>
              <br />
              <input
                data-testid="password"
                className="input"
                placeholder="Password"
                value={password}
                minLength="8"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />{" "}
              <br />
              <label className="label">Confirm Password</label>
              <br />
              <input
                className="input"
                placeholder="Confirm Password"
                value={confirmPassword}
                minLength="8"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />{" "}
              <br />
              <label className="label">Mobile Number</label>
              <br />
              <input
                className="input"
                placeholder="Mobile Number"
                value={mobileNumber}
                minLength="10"
                maxlength="10"
                type="text"
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />{" "}
              <br />
              <Button className="btn" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
