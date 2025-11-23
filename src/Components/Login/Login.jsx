import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, Typography, message, Avatar } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import video from "../Login/backvideo-C_O02uC7.mp4"; // keep your mp4 import
// import { color } from "framer-motion";

const { Title } = Typography;

export default function Login() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { email, password, remember } = values;

    if (email === "user@example.com" && password === "password123") {
      message.success("Login successful");
      if (remember) localStorage.setItem("auth", "true");
      navigate("/");
    } else {
      message.error("Invalid credentials");
    }
  };

  return (
    <div className="login-page">

      {/* background video */}
      <video className="login-bg-video" src={video} autoPlay loop muted playsInline />

      {/* dark overlay */}
      <div className="login-overlay" />

      {/* centered login card */}
      <div className="login-card">

        <Avatar size={80} icon={<UserOutlined />} className="login-avatar" />

        <Title style={{color: "#fff"}} level={3} className="login-title">Sign In</Title>

        <Form
          form={form}
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="login-form"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Enter a valid email!" }
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be at least 6 characters" }
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>

          <div className="login-links">
            <a href="/login">Forgot password?</a>
            <span> | </span>
            <Link to="/register">Register</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
