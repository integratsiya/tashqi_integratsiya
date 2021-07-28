import React from "react";
import Button from "../../globalStyles/buttons";
import { Input, InputSearchBig } from "../../globalStyles/inputsSearch";
import { PTitle } from "../../globalStyles/title";
import { Flex } from "../../globalStyles/wrappers";

const SignIn = () => {
  return (
    <Flex direction="column" padding="32px" width="392px">
      <PTitle>Kirish</PTitle>
      <Flex direction="column" gap="16px" margin="32px 0 0">
        <Flex direction="column" gap="8px">
          <label>Login</label>
          <InputSearchBig width="328px">
            <Input type="text" padding="12px 16px" />
          </InputSearchBig>
        </Flex>
        <Flex direction="column" gap="8px">
          <label>Parol</label>
          <InputSearchBig width="328px">
            <Input type="text" padding="12px 16px" />
          </InputSearchBig>
        </Flex>
        <Button width="328px" margin="16px 0 0">
          So‘rov yuborish
        </Button>
        <p style={{ textAlign: "center", textDecoration: "underline" }}>
          Зарегистрироваться
        </p>
      </Flex>
    </Flex>
  );
};

export default SignIn;
