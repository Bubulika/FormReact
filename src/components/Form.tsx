import { useState } from "react";
import styled from "styled-components";
import errorIcon from "../assets/images/icon-error.svg";

export default function Form() {
  const [formData, setFormData] = useState<formData>({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
  });

  const [errorMessage, setErrorMessage] = useState<formData>({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
  });

  interface formData {
    firstName: string;
    lastName: string;
    email: string;
    pass: string;
  }

  const handleInputChange = (e: any) => {
    if (e.target.name === "firstName" || e.target.name === "lastName") {
      const lettersOnly = /^[a-zA-Z]*$/;
      if (lettersOnly.test(e.target.value)) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setErrorMessage(validate(formData));
  };

  const validate = (values: any) => {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      pass: "",
    };
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
    if (values.firstName === "") {
      errors.firstName = "Firstname is requred";
    } else if (values.firstName.length < 3) {
      errors.firstName = "Firstname is too short";
    } else if (values.firstName.length > 10) {
      errors.firstName = "Firstname is too long";
    }

    if (values.lastName === "") {
      errors.lastName = "Lastname is requred";
    } else if (values.lastName.length <= 3) {
      errors.lastName = "Lastname is too short";
    } else if (values.lastName.length > 10) {
      errors.lastName = "Lastname is too long";
    }

    if (values.email === "") {
      errors.email = "Email is requred";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid";
    }

    if (values.pass === "") {
      errors.pass = "Password is requred";
    } else if (!passRegex.test(values.pass)) {
      errors.pass =
        "Minimum 8 chars, at least one uppercase and lowercase letter, number and symbol";
    }
    return errors;
  };

  console.log(errorMessage);
  console.log(formData);

  return (
    <InputForm onSubmit={handleFormSubmit}>
      <Input
        errorMessage={errorMessage.firstName}
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <Error>{errorMessage.firstName}</Error>
      <Input
        errorMessage={errorMessage.lastName}
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <Error>{errorMessage.lastName}</Error>
      <Input
        errorMessage={errorMessage.email}
        placeholder="Email Address"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <Error>{errorMessage.email}</Error>
      <Input
        errorMessage={errorMessage.pass}
        placeholder="Password"
        name="pass"
        value={formData.pass}
        onChange={handleInputChange}
        type="password"
      />
      <Error>{errorMessage.pass}</Error>
      <FormButton>CLAIM YOUR FREE TRIAL</FormButton>
      <MiniContainer>
        <Parag>
          By clicking the button, you are agreeing to our{" "}
          <RedText>Terms and Services</RedText>
        </Parag>
      </MiniContainer>
    </InputForm>
  );
}

const Error = styled.div`
  display: none;
  @media screen and (min-width: 1050px) {
    display: block;
    width: 100%;
    height: 25px;
    margin-top: 4px;
    font-family: "Poppins";
    font-style: italic;
    font-weight: 500;
    font-size: 11px;
    color: ${(props) => props.theme.colors.Red};
    text-align: right;
  }
`;

const InputForm = styled.form`
  width: 100%;
  height: 442px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  background: ${(props) => props.theme.colors.White};
  margin-top: 24px;
  @media screen and (min-width: 1050px) {
    width: 540px;
    height: 562px;
  }
`;

const Input = styled.input<{
  errorMessage: string;
}>`
  width: 100%;
  height: 56px;
  outline: none;
  padding-left: 19.5px;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.errorMessage
        ? props.theme.colors.Red
        : props.theme.colors.GrayishBlue};

  margin-bottom: 16px;
  @media screen and (min-width: 1050px) {
    background-image: ${(props) =>
      props.errorMessage ? `url(${errorIcon})` : null};
    background-position: center right 17px;
    background-repeat: no-repeat;
    margin-bottom: 0px;
    margin-top: 17px;
  }
`;

const FormButton = styled.button`
  all: unset;
  width: 100%;
  height: 56px;
  background: ${(props) => props.theme.colors.Green};
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.White};
  @media screen and (min-width: 1050px) {
    margin-top: 42px;
  }
`;

const MiniContainer = styled.div`
  width: 100%;
  height: 42px;
  padding: 0 15px;
  margin-top: 8px;
`;
const Parag = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 21px;
  text-align: center;
  color: #bab7d4;
`;

const RedText = styled.span`
  color: ${(props) => props.theme.colors.Red};
`;
