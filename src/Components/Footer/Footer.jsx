import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import "./Footer.css";

const { Footer } = Layout;
const { Link, Text } = Typography;

export default function FooterSimple() {
  return (
    <Footer className="footer-bg">
      {/* Top Section */}
      <Row justify="space-between" className="footer-top">

        {/* Left Links */}
        <Col xs={24} md={6} className="footer-col">
          <ul>
            <li><Link href="/contact">CONTACT</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
          </ul>
        </Col>

        {/* Center Brand */}
        <Col xs={24} md={6} className="footer-center">
          <Text className="footer-brand">Z PRINCESS SAFFRON</Text>
        </Col>

        {/* Right Links */}
        <Col xs={24} md={6} className="footer-col">
          <ul>
            <li><Link href="/terms">TERMS AND CONDITION</Link></li>
            <li><Link href="/privacy">PRIVACY POLICY</Link></li>
            <li><Link href="/corporate">CORPORATE ESSENTIALS ▾</Link></li>
          </ul>
        </Col>
      </Row>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-left">
          <Link href="/refund">REFUND POLICY</Link>
          <Link href="/shipping">SHIPPING POLICY</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        <div className="bottom-right">
          © {new Date().getFullYear()} Z PRINCESS SAFFRON
        </div>
      </div>
    </Footer>
  );
}
