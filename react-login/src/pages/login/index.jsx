// 整体容器
import { Container, FormBox, RegBox, BackBox } from "./styled";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginAction } from "../../store/actions";
function Login() {
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [activeModule, setActiveModule] = useState("Login");
  const handleModuleChange = (module) => {
    setActiveModule(module);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(loginAction(values));
    localStorage.setItem("userInfo", JSON.stringify(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // 根据手机号是否填写，更新按钮禁用状态
  const handlePhoneNumberChange = (event) => {
    console.log(/^(1[3456789])\d{9}$/.test(event.target.value));
    if (/^(1[3456789])\d{9}$/.test(event.target.value)) {
      return setIsButtonDisabled(false);
    }
    setIsButtonDisabled(true);
  };
  return (
    <Container>
      {activeModule === "Login" && (
        <FormBox>
          <div className="title">登录</div>
          <div className="form">
            <Form
              name="basic"
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入用户名!",
                  },
                  {
                    pattern: new RegExp("^(?=.*?[0-9a-zA-Z])[0-9a-zA-Z]{1,6}$"),
                    message: "由不超过6位数纯数字、字母或数字与英文字母组合;",
                  },
                ]}
              >
                <Input placeholder="请输入用户名!" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入密码!",
                  },
                  {
                    pattern: new RegExp(
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/
                    ),
                    message:
                      "最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符；",
                  },
                ]}
              >
                <Input.Password placeholder="请输入密码!" />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{
                    width: "100%",
                  }}
                  type="primary"
                  htmlType="submit"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="other">
            <a className="forget" onClick={() => handleModuleChange("Back")}>
              忘记密码
            </a>
            <div className="register">
              没有账号?
              <a onClick={() => handleModuleChange("Reg")}>快速注册</a>
            </div>
          </div>
        </FormBox>
      )}
      {activeModule === "Reg" && (
        <RegBox>
          <div className="title">用户注册</div>
          <div className="form">
            <Form
              name="basic"
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入用户名!",
                  },
                  {
                    pattern: new RegExp("^(?=.*?[0-9a-zA-Z])[0-9a-zA-Z]{1,6}$"),
                    message: "由不超过6位数纯数字、字母或数字与英文字母组合;",
                  },
                ]}
              >
                <Input placeholder="请输入用户名!" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "请输入手机号!",
                  },
                  {
                    pattern: new RegExp(/^(1[3456789])\d{9}$/),
                    message: "由1（3,4,5,6,7,8,9）开头的11位数字",
                  },
                ]}
              >
                <Input
                  onChange={handlePhoneNumberChange}
                  placeholder="请输入手机号!"
                />
              </Form.Item>
              <Form.Item
                name="code"
                rules={[
                  {
                    required: true,
                    message: "请输入验证码!",
                  },
                  {
                    pattern: new RegExp(/^\d{6}$/),
                    message: "由六位数字组成",
                  },
                ]}
              >
                <div className="code">
                  <Input
                    style={{ maxWidth: 160 }}
                    placeholder="请输入验证码!"
                  />
                  <Button disabled={isButtonDisabled} type="primary">
                    获取验证码
                  </Button>
                </div>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入密码!",
                  },
                  {
                    pattern: new RegExp(
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/
                    ),
                    message:
                      "最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符；",
                  },
                ]}
              >
                <Input.Password placeholder="请输入密码!" />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{
                    width: "100%",
                  }}
                  type="primary"
                  htmlType="register"
                >
                  立刻注册
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="other">
            <a onClick={() => handleModuleChange("Back")} className="forget">
              忘记密码
            </a>
            <div className="register">
              已有账号?
              <a onClick={() => handleModuleChange("Login")}>马上登录</a>
            </div>
          </div>
        </RegBox>
      )}
      {activeModule === "Back" && (
        <BackBox>
          <div className="title">找回密码</div>
          <div className="form">
            <Form
              name="basic"
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "请输入手机号!",
                  },
                  {
                    pattern: new RegExp(/^(1[3456789])\d{9}$/),
                    message: "由1（3,4,5,6,7,8,9）开头的11位数字",
                  },
                ]}
              >
                <Input
                  onChange={handlePhoneNumberChange}
                  placeholder="请输入手机号!"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入密码!",
                  },
                  {
                    pattern: new RegExp(
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/
                    ),
                    message:
                      "最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符；",
                  },
                ]}
              >
                <Input.Password placeholder="请输入新密码!" />
              </Form.Item>
              <Form.Item
                name="code"
                rules={[
                  {
                    required: true,
                    message: "请输入验证码!",
                  },
                  {
                    pattern: new RegExp(/^\d{6}$/),
                    message: "由六位数字组成",
                  },
                ]}
              >
                <div className="code">
                  <Input
                    style={{ maxWidth: 160 }}
                    placeholder="请输入验证码!"
                  />
                  <Button disabled={isButtonDisabled} type="primary">
                    获取验证码
                  </Button>
                </div>
              </Form.Item>
              <Form.Item>
                <Button
                  style={{
                    width: "100%",
                  }}
                  type="primary"
                  htmlType="getPassword"
                >
                  确定
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="other">
            <a onClick={() => handleModuleChange("Login")} className="forget">
              立刻登录
            </a>
            <div className="register">
              没有账号?<a onClick={() => handleModuleChange("Reg")}>快速注册</a>
            </div>
          </div>
        </BackBox>
      )}
    </Container>
  );
}

export default Login;
