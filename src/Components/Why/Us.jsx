import { Row, Col, Card, Typography, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import video from "../assets/v4-BTT1jpwy.mp4"; 
import heroImg from "../assets/w.jpg"; 
import img1 from "../assets/one.jpg";
import img2 from "../assets/two.jpg";
import img3 from "../assets/three.jpg";
import img4 from "../assets/f.jpg";
import img5 from "../assets/five.jpg";
import img6 from "../assets/six.jpg";
import Foot from "../Footer/Footer.jsx";
import "./Us.css";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const VersatileCard = ({ src, title, subtitle }) => (
  <Card
    hoverable
    cover={<img alt={title} src={src} />}
    className="versatile-card"
    bodyStyle={{ padding: 16 }}
  >
    <Meta title={<div className="vc-title">{title}</div>} description={<div className="vc-sub">{subtitle}</div>} />
  </Card>
);

export default function Us() {
  return (
    <>
      {/* HERO / VIDEO */}
      <div className="page-root">
        <div className="home">
          <video className="bg-video" src={video} autoPlay loop muted playsInline />
          <div className="home-content">
            <Title style={{ fontSize: 64, color: "#fff", marginBottom: 6 }}>OUR SAFFRON</Title>
            <Paragraph style={{ fontSize: 16, color: "#eee", maxWidth: 680, margin: "0 auto" }}>
              At Z Princess Saffron, we pride ourselves on offering the highest quality saffron sourced from the renowned regions of Kashmir, Iran, and Spain. Handpicked threads, artisanal processing, and strict quality checks.
            </Paragraph>
          </div>
        </div>
        {/* FEATURES*/}
        <section className="features container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={10}>
              <img src={img4} alt="quality" className="feature-img left" />
            </Col>

            <Col xs={24} md={14}>
              <Title level={3}>UNMATCHED QUALITY AND PURITY</Title>
              <Paragraph className="muted">
                Our saffron is celebrated for its vibrant color, rich flavor, and notable health benefits — sourced carefully and processed to preserve its potency.
              </Paragraph>
            </Col>

            
            <Col xs={24} md={14} className="mt-md">
              <Title level={3}>ETHICAL AND SUSTAINABLE SOURCING</Title>
              <Paragraph className="muted">
                We ensure fair compensation and support traditional farming methods while maintaining exceptional quality.
              </Paragraph>
            </Col>

            <Col xs={24} md={10}>
              <img src={img5} alt="fields" className="feature-img right" />
            </Col>

            
            <Col xs={24} md={10}>
              <img src={img6} alt="harvest" className="feature-img left" />
            </Col>

            <Col xs={24} md={14}>
              <Title level={3}>CRAFTED WITH CARE</Title>
              <Paragraph className="muted">
                Each thread is hand-picked and dried gently to preserve aroma and color — our artisans handle every step with precision.
              </Paragraph>
            </Col>
          </Row>
        </section>
        
        <section className="pill-section">
          <div className="container">
            <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>VERSATILE USES</Title>

            <Row gutter={[24, 24]} justify="center">
              <Col xs={24} sm={12} md={8}>
                <VersatileCard src={img1} title="CULINARY DELIGHTS" subtitle="Enhance Flavors With Our Premium Saffron." />
              </Col>
              <Col xs={24} sm={12} md={8}>
                <VersatileCard src={img2} title="RADIANT GLOW" subtitle="Boost Skin Health With Antioxidant-Rich Saffron." />
              </Col>
              <Col xs={24} sm={12} md={8}>
                <VersatileCard src={img3} title="BALANCED LIVING" subtitle="Experience Saffron's Stress-Relief Benefits." />
              </Col>
            </Row>
          </div>
        </section>
         
        <section className="wide-banner" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="banner-overlay">
            <Title style={{ color: "#fff", fontSize: 42, marginBottom: 8 }}>ELEVATE YOUR EXPERIENCE</Title>
            <Paragraph style={{ color: "rgba(255,255,255,0.9)", maxWidth: 900, margin: "0 auto" }}>
              Choose Z Princess Saffron For Culinary, Beauty, And Wellness Excellence.
            </Paragraph>
          </div>
        </section>
      </div>

      <Foot />
    </>
  );
}
