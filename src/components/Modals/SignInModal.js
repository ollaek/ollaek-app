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
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal
} from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignInModal = ({ toggleModal, changeToggleModal }) => {
  const [emailFocused, setEmailFocused] = useState(null);
  const [passwordFocused, setPasswordFocused] = useState(null);
  const mailFocus = () => {
    setEmailFocused(!emailFocused);
  };
  const passwordFocus = () => {
    setPasswordFocused(!passwordFocused);
  };

 

  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("Required")
  });

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }
  function validatePassword(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(value)) {
      error = 'Minimum eight characters, at least one letter, one number and one special character';
    }
    return error;
  }

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
            <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              onSubmit={values => {
                debugger;
                try {
                  const token = SignInService(values);
                  localStorage.setItem("token", token.data.access_token);
                } catch (ex) {
                  console.log(ex);
                }
                console.log(values);
              }}
            >
              {({ errors, touched, isValidating }) => (
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
                        name="email"
                        type="email"
                        onFocus={mailFocus}
                        onBlur={mailFocus}
                        id="email"
                        validate={validateEmail}
                      />
                      
                    </InputGroup>
                    
                  </FormGroup>
                  {errors.email && touched.email && <div>{errors.email}</div>}
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
                        name="password"
                        type="password"
                        autoComplete="off"
                        onFocus={passwordFocus}
                        onBlur={passwordFocus}
                        id="password"
                        validate={validatePassword}
                      />
                      
                    </InputGroup>
                  </FormGroup>
                  {errors.password && touched.password && <div>{errors.password}</div>}

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
                      type="submit"
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </div>
    </Modal>
  );
};

export default SignInModal;
