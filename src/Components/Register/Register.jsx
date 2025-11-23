import React from "react";
import { Form, Input, Button, Typography, Avatar, message } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import video from "../Login/backvideo-C_O02uC7.mp4"; // same video path as Login

const { Title, Text } = Typography;

export default function Register() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Register values:", values);
    message.success("Registered successfully (demo)");
    setTimeout(() => navigate("/login"), 700);
  };

  return (
    <div className="register-page">
      
      <video className="bg-video" src={video} autoPlay loop muted playsInline />

      
      <div className="register-overlay" />

      {/* card */}
      <div className="register-card">
        <Avatar size={84} icon={<UserOutlined />} className="register-avatar" />

        <Title style={{color: "#fff"}} level={3} className="register-title">CUSTOMER REGISTER</Title>

        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          layout="vertical"
          className="register-form"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              size="large"
              placeholder="Enter Name"
              prefix={<UserOutlined />}
              className="glass-input"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter email or phone" },
              { type: "email", message: "Enter a valid email (or use phone)" },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter Email or Phone"
              prefix={<MailOutlined />}
              className="glass-input"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter Password"
              prefix={<LockOutlined />}
              className="glass-input"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block className="register-btn">
              REGISTER
            </Button>
          </Form.Item>
        </Form>

        <div className="register-footer">
          <Text className="existing-text">
            Existing User?{" "}
            <a onClick={() => navigate("/login")} className="login-link">
              Continue Login
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
}
