import React from "react";
import { Row, Col, Typography } from "antd";
import "./Compay.css";
import com1 from "../assets/com.jpg";
import com2 from "../assets/comp.jpg";
import com3 from "../assets/co.jpg";
import com4 from "../assets/c.jpg";
import com5 from "../assets/m.jpg";
import Foot from "../Footer/Footer.jsx";

const { Title, Paragraph } = Typography;

const sections = [
  {
    title: "A CULINARY GEM",
    text:
      "Kashmiri saffron's high crocin content not only enhances dishes with its unique aroma but also imbues them with a brilliant golden hue. When added to biryanis, pilafs and stews, it elevates these dishes to a new level of culinary excellence. Desserts, too, are transformed by its presence — from the creamy richness of saffron-infused ice creams to the delicate sweetness of traditional Indian sweets like kheer and gulab jamun.",
    img: com1, 
  },
  {
    title: "THE ESSENCE OF OPULENCE",
    text:
      "Kashmiri saffron epitomizes opulence and wellness. Whether enhancing the flavors of a gourmet dish, adding a golden touch to desserts, or revitalizing the skin, this golden essence from the Himalayas offers a touch of luxury and a myriad of benefits. Embrace the magic of Kashmiri saffron and let its rich heritage elevate your culinary, beauty, and wellness routines.",
    img: com5,
  },
  {
    title: "CULTIVATION AND HARVESTING",
    text:
      "The cultivation of Kashmiri saffron is an art passed down through generations. The Crocus blooms for a short period in autumn and each flower must be hand-picked at dawn to preserve its delicate stigmas. These stigmas are then dried to produce threads prized for their potency and purity. The labor-intensive process and limited geography contribute to its rarity and value.",
    img: com3,
  },
  {
    title: "BEAUTY AND WELLNESS",
    text:
      "Beyond the kitchen, Kashmiri saffron is a revered component in luxurious beauty rituals. Its antioxidant content makes it a powerful ally in skincare — brightening and rejuvenating the skin when used in face masks, creams and serums. Saffron helps diminish dark spots, even out skin tone, and impart a radiant glow.",
    img: com4 ,
  },
  {
    title: "MEDICINAL MARVEL",
    text:
      "Kashmiri saffron is celebrated for its medicinal properties. Rich in antioxidants, vitamins and minerals, it has been used traditionally to boost overall health — improving digestion, supporting heart health, and enhancing mood. Its anti-inflammatory and antibacterial properties further contribute to its status as a holistic health booster.",
    img: com2 ,
  },
];

export default function compay() {
  return (
   <>
    <div className="ks-hero-wrapper">
      <div className="ks-hero-content">
        <Title className="ks-hero-title">KASHMIR SAFFRON</Title>

        <div className="ks-hero-subtitle">
          THE GOLDEN ESSENCE OF THE HIMALAYAS
        </div>

        <Paragraph className="ks-hero-text">
          Nestled in the heart of the enchanting Kashmir Valley, Kashmiri Saffron is a treasure of unparalleled beauty and potency. 
          Known for its deep crimson threads, this “Red Gold” is celebrated worldwide for its rich flavor, vibrant color, and remarkable 
          medicinal properties. Each thread of Kashmiri saffron is a testament to the fertile soils and pristine climate of the Himalayan 
          region, where it is meticulously hand-harvested to ensure the highest quality.
        </Paragraph>
      </div>
    </div>
    <section className="ks-wrapper">
      <div className="ks-container">
        {sections.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <div className="ks-section" key={s.title}>
              <Row
                gutter={[32, 32]}
                align="middle"
                justify="center"
                className={reverse ? "row-reverse" : ""}
              >
                <Col xs={24} md={10}>
                  <div className="ks-image-wrap">
                    <img src={s.img} alt={s.title} className="ks-image" />
                  </div>
                </Col>

                <Col xs={24} md={14}>
                  <div className="ks-text">
                    <Title level={2} className="ks-title">
                      {s.title}
                    </Title>
                    <Paragraph className="ks-paragraph">{s.text}</Paragraph>
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </section>
    <Foot/>
   </>
  );
}
