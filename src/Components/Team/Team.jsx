import NavBar from "../NavBar.jsx";
import { Typography, Button, Card } from "antd";
// import "./Home.css";
import video from "../assets/insightvideo-QZD8qk3w.mp4";
import { Row, Col, Form, Input } from "antd";
import Foot from "../Footer/Footer.jsx";
import "./Team.css"; // add this for 
import img1 from "../assets/a.jpg"
import img2 from "../assets/benyamin-bohlouli--d3pDlYSmO0-unsplash.jpg"
import img3 from "../assets/Master.jpg"

const { Title, Paragraph } = Typography;

const Team = () => {
  const insightCards = [
    {
      title: "CULINARY MASTERY",
      desc: "Add a single thread of saffron to your dish and the moment it touches your food, the air fills with a rich, honeyed aroma.",
      img: img1,
    },
    {
      title: "TIMELESS BEAUTY",
      desc: "Saffron is cherished for its beauty-enhancing properties, reducing fine lines, improving skin texture and imparting a radiant glow.",
      img: img3,
    },
    {
      title: "HOLISTIC WELL-BEING",
      desc: "Saffron is celebrated for its remarkable health benefits, promoting mood enhancement, stress reduction and digestive balance.",
      img: img2,
    },
  ];

  return (
    <div className="page-root">
      <NavBar />

      {/* HERO VIDEO SECTION */}
      <div className="home">
        <video className="bg-video" src={video} autoPlay loop muted playsInline />

        <div className="home-content">
          <Title style={{ fontSize: "80px", color: "#fff", marginBottom: 0 }}>INSIGHT</Title>

          <Paragraph
            style={{
              fontSize: "15px",
              color: "#eee",
              maxWidth: 520,
              margin: "0 auto",
              fontFamily: "revert",
            }}
          >
            In the delicate petals of saffron, tradition finds its fragrance, and life its vibrance.
          </Paragraph>
        </div>
      </div>

      {/* MAIN INSIGHT SECTION */}
      <section className="insight-wrapper">

        {/* TOP TEXT BLOCK */}
        <div className="insight-top container">

          <Title className="insight-heading">THE SECRETS OF THE CROCUS SATIVUS</Title>
          <Paragraph className="insight-sub">
            Step into a world where history and luxury meet with our premium saffron collection.
            Each saffron thread tells a story of ancient royalty and offers the promise of vibrant
            culinary delights, radiant skin, and a touch of well-being magic.
          </Paragraph>
        </div>

        {/* CARD STRIP */}
        <div className="insight-cards-band">
          <div className="container">
            <Row gutter={[24, 24]}>
              {insightCards.map((card, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <Card
                    hoverable
                    className="insight-card"
                    bodyStyle={{ padding: "16px" }}
                    cover={
                      <div className="card-image-wrapper">
                        <img src={card.img} alt={card.title} className="card-image" />
                      </div>
                    }
                  >
                    <div className="card-content">
                      <div className="card-title">{card.title}</div>
                      <div className="card-desc">{card.desc}</div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* LOWER TEXT BLOCKS */}
        <div className="insight-lower container">
          <Title level={3} className="lower-heading">
            QUALITY AND TRADITION
          </Title>
          <Paragraph className="lower-text">
            Our premium saffron is the key to unlocking this ancient magic. Each thread is hand-picked
            and carefully dried to preserve its strength, purity and potency.
          </Paragraph>

          <Title level={3} className="lower-heading">EXPERIENCE THE MAGIC</Title>
          <Paragraph className="lower-text">
            Discover the golden threads woven through history—allow saffron’s enchantment to elevate your
            life in ways you never imagined.
          </Paragraph>
        </div>

      </section>

      {/* FOOTER */}
      <Foot />
    </div>
  );
};

export default Team;
