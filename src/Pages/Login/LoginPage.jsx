import React from "react";
// import { Button, Form, Input } from "antd";
// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { authentication } from "../../actions/auth";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

function LoginPage({ loading, authentication }) {
  // const history = useHistory();
  // const [data, setData] = useState({
  //   username: "Master",
  //   password: 12345,
  // });

  // const onFinish = async () => {
  //   await authentication(data, history);
  // };

  return (
    <div className="py30 container">
      {/* <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        className="flex"
      >
        <Form.Item
          label="Username"
          name="username"
          className="block"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          className="block"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />
        </Form.Item>
        <Form.Item {...tailLayout} className="block">
          <Button onClick={onFinish} type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
      <SignIn />
      <SignUp />
    </div>
  );
}
export default LoginPage;
// const mapStateToProps = (state) => ({});

// export default connect(mapStateToProps, {
//   authentication,
// })(Login);
