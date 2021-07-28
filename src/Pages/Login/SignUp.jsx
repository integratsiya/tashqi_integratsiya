import React, { useState } from "react";
import { MenuItem, Select } from "@material-ui/core";
import { useSelectStyles } from "../../components/shared/Select/SelectMaterialStyle";
import Button from "../../globalStyles/buttons";
import { Input, InputSearchBig } from "../../globalStyles/inputsSearch";
import { PTitle } from "../../globalStyles/title";
import { Flex } from "../../globalStyles/wrappers";
import { StyledArrow } from "../../globalStyles/Icons";

const SignUp = () => {
  const classes = useSelectStyles();
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Flex direction="column" padding="40px" width="496px">
      <PTitle>Akkount yaratish</PTitle>
      <Flex direction="column" gap="16px" margin="32px 0 0">
        <Flex direction="column" gap="8px">
          <label>F.I.SH</label>
          <InputSearchBig width="416px">
            <Input type="text" padding="12px 16px" />
          </InputSearchBig>
        </Flex>
        <Flex direction="column" gap="8px">
          <label>Boshqarma nomi</label>
          <InputSearchBig width="416px">
            <Input type="text" padding="12px 16px" />
          </InputSearchBig>
        </Flex>
        <Flex direction="column" gap="8px">
          <label>Login</label>
          <InputSearchBig width="416px">
            <Input type="text" padding="12px 16px" />
          </InputSearchBig>
        </Flex>
        <Flex direction="column" gap="8px">
          <label>Parol</label>
          <InputSearchBig width="416px">
            <Input type="password" padding="12px 16px" />
          </InputSearchBig>
        </Flex>
        <Flex direction="column" gap="8px">
          <label>Mansabi</label>
          <Select
            onChange={handleChange}
            IconComponent={StyledArrow}
            classes={{ root: classes.selectRoot }}
            className={classes.select}
            style={{ width: "416px" }}
            disableUnderline={true}
            autoFocus={false}
          >
            <MenuItem value={2}>Tanlang2.2</MenuItem>
          </Select>
        </Flex>
        <Button width="416px" margin="24px 0 0">
          So‘rov yuborish
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignUp;
