import React, { useEffect } from "react";
import { Redirect } from "react-router";

import Header, {
  HeaderText,
  HeaderInner,
} from "../../components/Header/Header";
import ImagePreview, {
  ImagePreviewDetails,
  ImagePreviewWrap,
} from "../../components/ImagePreview";

import { Wrapper, Flex } from "../../components/Container/Wrapper";
import FormGroup from "../../components/FormGroup/FormGroup";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import { StyledTextLink } from "../../components/Link/Links";
import {
  FormWrapper,
  Headline,
  BodyText,
  WrapperItem,
  Or,
  OrInner,
  Form,
  FormRow,
  FormText,
  MessageText,
} from "./AuthStyles";
import { Link } from "react-router-dom";

import Icon from "../../components/Icon/Icon";
import Spacer from "../../components/Spacer/Spacer";

import { useFormValidation } from "../../hooks/useFormValidation";
import { useAuth } from "../../context/AuthContext";
import {scroll} from '../../hooks/Scroll'
import * as auth from "./auth-provider";
import TagsSlider from "../../components/slider/Slider";
import LeftSideNav from "../../components/Header/LeftSideNav";

const Signup = () => {

	useEffect(() => {
		scroll()
	}, [])

  const { register, handleSubmit, errors } = useFormValidation();
  const [message, setMessage] = React.useState("");
  const { user } = useAuth();

  if (user) return <Redirect to="/" />;

  const signUp = async (data) => {
    setMessage("");

    const newData = {
      ...data,
      firstName: data.firstName.toLowerCase(),
      lastName: data.lastName.toLowerCase(),
    };

    try {
      const resp = await auth.signup(newData);
      console.log(resp);
      // if (resp.type === "error") {
      // 	setMessage(resp.message);
      // } else if (resp.type === "success") {
      // 	<Redirect to='/login' />;
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <Header>
        <LeftSideNav />
        <HeaderInner>
          <HeaderText>Already have an account?</HeaderText>
          <Button
            theme="outlined"
            as={Link}
            style={{ marginLeft: "2rem" }}
            to="/login"
          >
            Login
          </Button>
        </HeaderInner>
      </Header>
      <Flex>
        <ImagePreviewWrap>
          <ImagePreview />
          <ImagePreviewDetails />
        </ImagePreviewWrap>

        <FormWrapper>
          <Headline>Sign up to Pishure.</Headline>
          <BodyText>
            Millions of free beautiful Nigerian photos for every creative.
          </BodyText>
          <WrapperItem>
            <Button theme="twitter" fontSize="1rem">
              <Icon type="twitter" />
              <Spacer size="1.5rem" />
              Sign up with Twitter
            </Button>
            <Button theme="fb">
              <Icon type="fb" />
            </Button>
          </WrapperItem>
          <Or>
            <OrInner>OR</OrInner>
          </Or>
          {message ? <MessageText>{message}</MessageText> : null}
          <Form onSubmit={handleSubmit(signUp)} mb="1.5rem">
            <FormRow grid>
              <FormGroup
                register={register}
                label="First name"
                mgR="1.5rem"
                name="firstName"
                required
                error={errors.firstName}
              />
              <FormGroup
                register={register}
                name="lastName"
                label="Last name"
                required
                error={errors.lastName}
              />
            </FormRow>

            <FormRow>
              <FormGroup
                register={register}
                type="email"
                label="Email address"
                name="email"
                required
                error={errors.email}
              />
            </FormRow>

            <FormRow mb="2.5rem">
              <FormGroup
                register={register}
                type="password"
                label="Password"
                name="password"
                required
                error={errors.password}
                minlength={8}
              />
            </FormRow>
            <Button
              theme="primary"
              width="100%"
              fontSize="1rem"
              height="3.5rem"
              type="submit"
            >
              Sign up
            </Button>
          </Form>
          <FormText>
            By signing up, you agree to our{" "}
            <StyledTextLink>Terms of Service</StyledTextLink> and{" "}
            <StyledTextLink>Privacy Policy</StyledTextLink>.
          </FormText>
        </FormWrapper>
      </Flex>
    </Wrapper>
  );
};

export default Signup;
