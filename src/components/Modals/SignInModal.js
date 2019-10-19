import React, { useState } from "react";
import { SignInService } from "../../services/SignInService";
import FacebookLoginButton from "../CustomTags/FacebookLoginButton";
import GoogleLoginButton from "../CustomTags/GoogleLoginButton";

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
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignInModal = ({ toggleModal, changeToggleModal }) => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [SignInState, SetSignInState] = useState(null);
  const emailFocus = () => {
    setEmailFocused(!emailFocused);
  };
  const passwordFocus = () => {
    setPasswordFocused(!passwordFocused);
  };

  const OnSubmittingSignIn = async values => {
    debugger;
    try {
      const token = await SignInService(values);
      console.log(token);
      if (token.status === 200) {
        SetSignInState(true);
        localStorage.setItem("token", token.data.access_token);
        localStorage.setItem("name", token.data.userName);
        localStorage.setItem("profilePicture", token.data.profilePicture);
        changeToggleModal();
      } else {
        SetSignInState(false);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Required")
  });

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
              <FacebookLoginButton
                changeToggleModal={() => {
                  changeToggleModal();
                }}
              />
              <GoogleLoginButton
                changeToggleModal={() => {
                  changeToggleModal();
                }}
              />
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
              validationSchema={SignupSchema}
              onSubmit={values => {
                console.log(values);
                OnSubmittingSignIn(values);
              }}
            >
              {({ errors, touched }) => (
                <Form role="form">
                  <FormGroup
                    className={classnames({
                      focused: emailFocus
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        tag={Field}
                        name="email"
                        placeholder="Email"
                        type="text"
                        onFocus={emailFocus}
                        onBlur={emailFocus}
                      />
                    </InputGroup>
                  </FormGroup>

                  {errors.email && touched.email ? (
                    <small style={{ color: "red" }}> {errors.mail}</small>
                  ) : null}
                  <FormGroup
                    className={classnames({
                      focused: passwordFocus
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        tag={Field}
                        name="password"
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        onFocus={passwordFocus}
                        onBlur={passwordFocus}
                      />
                    </InputGroup>
                  </FormGroup>

                  {errors.password && touched.password ? (
                    <small style={{ color: "red" }}> {errors.password}</small>
                  ) : null}
                  {SignInState === false ? (
                    <small style={{ color: "red" }}>
                      Email Or Password are not correct !!
                    </small>
                  ) : null}
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
                    <Button className="my-4" color="primary" type="submit">
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
