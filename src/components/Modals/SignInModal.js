import React, { useState } from "react";
import { SignInService } from "../../services/SignInService";

import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal
} from "reactstrap";
import { Formik } from "formik";

const SignInModal = ({ toggleModal, changeToggleModal }) => {
  const [emailFocused, setEmailFocused] = useState(null);
  const [passwordFocused, setPasswordFocused] = useState(null);
  let user = { email: null, password: null };
  const mailFocus = () => {
    setEmailFocused(!emailFocused);
  };
  const passwordFocus = () => {
    setPasswordFocused(!passwordFocused);
  };

  const onLoginClick = async () => {
    debugger;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    try {
      const token = await SignInService(user);
      localStorage.setItem("token", token.data.access_token);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Modal
      className="modal-dialog-centered"
      size="sm"
      isOpen={toggleModal}
      toggle={changeToggleModal}
    >
      <div className="modal-body p-0">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-white pb-5">
            <div className="text-muted text-center mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-icon mt-2 mb-2"
                color="neutral"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span className="btn-inner--icon mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/facebook.png")}
                  />
                </span>
                <span className="btn-inner--text">FACEBOOK</span>
              </Button>
              <Button
                className="btn-icon mt-2 mb-2 ml-1"
                color="neutral"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span className="btn-inner--icon mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/google.svg")}
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup
                className={classnames("mb-3", {
                  focused: emailFocused
                })}
              >
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    onFocus={mailFocus}
                    onBlur={mailFocus}
                    id="email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup
                className={classnames({
                  focused: passwordFocused
                })}
              >
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="off"
                    onFocus={passwordFocus}
                    onBlur={passwordFocus}
                    id="password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={onLoginClick}
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </Modal>
  );
};

export default SignInModal;
