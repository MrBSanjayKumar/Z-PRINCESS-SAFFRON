import NavBar from "../Components/NavBar.jsx";
import { Typography, Button } from "antd";
import "./Home.css";
import video from "../Components/assets/backvideo-C_O02uC7.mp4";
import { Row, Col, Form, Input} from "antd";
const { Title, Paragraph } = Typography;
import Foot from "./Footer/Footer.jsx";

const Home = () => {
  const onFinish = (values) => {
  console.log("Success:", values);
};

  return (
    <div className="page-root">
      <NavBar />

      <div className="home">
        <video className="bg-video" src={video} autoPlay loop muted playsInline />

        <div className="home-content">
          <Title style={{fontSize: "80px", color: "#fff", marginBottom: 0 }}>Z PRINCESS SAFFRON</Title>
          <Paragraph style={{ fontSize: "30px" , color: "#eee", maxWidth: 520, margin: "0 auto", fontFamily: "-apple-system" }}>
            World's Finest Saffron
          </Paragraph>
           <Button type="primary" size="large"
              style={{
              marginTop: "25px",
              padding: "0 30px",
              height: "45px",
              fontSize: "20px",
              borderRadius: "30px",
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff",
              }}
            >
            Shop Now
          </Button>
        </div>
      </div>
      <div className='home1'>
         <div className="home-content">
          <Title style={{fontSize: "80px", color: "#fff", marginBottom: 0 }}>OUR PRODUCTS</Title>
          <Button type="primary" size="large"
              style={{
              marginTop: "25px",
              padding: "0 30px",
              height: "45px",
              fontSize: "20px",
              borderRadius: "30px",
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff",
              }}
            >
            Shop Now
          </Button>
        </div>
      </div>
      <div className="two-sections-wrapper">
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <Title level={2} className="section-heading">WHAT SET US APART</Title>

          <Row gutter={[32, 32]} className="services-row">
            <Col xs={24} sm={8} className="service-col">
              <Title level={3} className="service-title">TRANSPARENCY</Title>
              <Paragraph className="service-desc">
                We provide detailed information about the origin and processing of our saffron, so you know exactly what you're buying.
              </Paragraph>
            </Col>

            <Col xs={24} sm={8} className="service-col">
              <Title level={3} className="service-title">INNOVATION</Title>
              <Paragraph className="service-desc">
                We continuously explore new ways to enhance the quality and usability of our saffron, ensuring we stay ahead of the market.
              </Paragraph>
            </Col>

            <Col xs={24} sm={8} className="service-col">
              <Title level={3} className="service-title">PASSION</Title>
              <Paragraph className="service-desc">
                Our passion for saffron drives us to maintain the highest standards and share this incredible spice with the world.
              </Paragraph>
            </Col>
          </Row>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <Title className="newsletter-heading">SUBSCRIBE TO OUR NEWSLETTER</Title>

          <Form
            layout="inline"
            className="subscribe-form"
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                placeholder="Email Address"
                className="subscribe-input"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" size="large" className="subscribe-btn">
                SUBSCRIBE
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
      <section>
        <Foot/>
      </section>
      </div>
    </div>
    
  );
};

export default Home;
