// ProductPageWithCart.jsx
import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Rate,
  Space,
  Image,
  Badge,
  Drawer,
  List,
  InputNumber,
  message,
} from "antd";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import "./Products.css";
import img1 from "../assets/w.jpg";
import img2 from "../assets/q.jpg";
import img3 from "../assets/r.jpg";
import Foot from "../Footer/Footer.jsx";
const { Title, Text, Paragraph } = Typography;

/*
  NOTE: product image path from your project session used as item image.
  You can replace with imports if you prefer.
*/
const defaultImages = [
  img1,
    img2,
    img3,
];

const PRICE_MAP = {
  "2g": 1600,
  "4g": 3000,
  "8g": 5800,
};

const LOCAL_KEY = "cart";

export default function ProductPageWithCart() {
  const [images] = useState(defaultImages);
  const [selected, setSelected] = useState(0);

  // cart state
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState("2g");

  // load cart from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
    }
  }, []);

  // helper: persist cart
  // inside ProductPageWithCart.jsx (replace your old persistCart)
const persistCart = (nextCart) => {
  setCart(nextCart);
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(nextCart));
  } catch (e) {
    console.error("Failed to save cart", e);
  }

  // notify other parts of the app in the same tab
  window.dispatchEvent(new Event("cartUpdated"));
};


  // compute totals
  const itemCount = cart.reduce((s, it) => s + it.qty, 0);
  const totalPrice = cart.reduce((s, it) => s + it.qty * it.price, 0);

  // add to cart
  const addToCart = (qty = 1) => {
    const sku = `${selected}-${selectedWeight}`; // simple unique key for product variant
    const product = {
      id: sku,
      productId: "spain-saffron", // product id
      title: "Spain Saffron",
      weight: selectedWeight,
      price: PRICE_MAP[selectedWeight],
      qty,
      img: images[selected],
    };

    // check if variant exists
    const exists = cart.find((c) => c.id === sku);
    let next;
    if (exists) {
      next = cart.map((c) =>
        c.id === sku ? { ...c, qty: Math.min(c.qty + qty, 99) } : c
      );
    } else {
      next = [...cart, product];
    }

    persistCart(next);
    message.success(`${product.title} (${product.weight}) added to cart`);
  };

  // remove item
  const removeItem = (id) => {
    const next = cart.filter((c) => c.id !== id);
    persistCart(next);
    message.success("Item removed");
  };

  // update qty
  const updateQty = (id, qty) => {
    const next = cart.map((c) => (c.id === id ? { ...c, qty } : c));
    persistCart(next);
  };

  // quick buy (add then open drawer)
  const handleAddAndOpen = () => {
    addToCart(1);
    setDrawerOpen(true);
  };

  return (
    <>
    <div className="product-page">
      <Row gutter={[32, 32]}>
        {/* LEFT */}
        <Col xs={24} lg={16} className="product-left">
          <div className="product-hero">
            <Image
              src={images[selected]}
              alt="Product"
              className="product-image"
              preview={{ mask: <div style={{ color: "#fff" }}>View</div> }}
              style={{ width: "100%", height: "72vh", objectFit: "cover" }}
            />
          </div>

          <div className="thumbs-row">
            {images.map((src, idx) => (
              <div
                key={src}
                className={`thumb ${idx === selected ? "thumb-active" : ""}`}
                onClick={() => setSelected(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSelected(idx);
                }}
              >
                <img src={src} alt={`thumb-${idx}`} />
              </div>
            ))}
          </div>

          {/* details */}
          <section id="details" className="product-section">
            <Title level={3}>Product Details</Title>
            <Paragraph>
              This premium saffron is sourced and graded to the highest standards. It is hand-picked and
              carefully dried to preserve color, aroma and flavour. Ideal for culinary use and beauty rituals.
            </Paragraph>
            <ul>
              <li>Origin: Spain</li>
              <li>Weight: 2/4/8 Grams</li>
              <li>Grade: Premium</li>
              <li>Storage: Airtight container, cool & dry</li>
            </ul>
          </section>

          <section id="reviews" className="product-section">
            <Title level={3}>Customer Reviews</Title>
            <Paragraph>No reviews yet — be the first to review this product.</Paragraph>
          </section>

          <section id="shipping" className="product-section">
            <Title level={3}>Delivery & Returns</Title>
            <Paragraph>
              We ship nationwide. Expect 3–5 business days for delivery. Returns accepted within 7 days of delivery (unused product).
            </Paragraph>
          </section>

          <section id="qa" className="product-section">
            <Title level={3}>Q & A</Title>
            <Paragraph>Have a question? Email us or check the FAQ.</Paragraph>
          </section>
        </Col>

        {/* RIGHT */}
        <Col xs={24} lg={8} className="product-right">
          <div className="product-info">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <Title level={4} className="product-title">Spain Saffron</Title>
                <Text className="product-price">₹{PRICE_MAP[selectedWeight].toLocaleString()}</Text>
                <div className="muted">(M.R.P incl. of all taxes)</div>
              </div>

              {/* Cart badge button */}
              {/* <Badge count={itemCount} overflowCount={99}>
                <Button
                  type="text"
                  icon={<ShoppingCartOutlined style={{ fontSize: 20 }} />}
                  onClick={() => setDrawerOpen(true)}
                />
              </Badge> */}
            </div>

            {/* Weight radio buttons */}
            <div className="product-weight" style={{ marginTop: 16 }}>
              <Text strong style={{ display: "block", marginBottom: 8 }}>Select Weight:</Text>
              <div className="weight-options">
                {Object.keys(PRICE_MAP).map((w) => (
                  <button
                    key={w}
                    className={`weight-btn ${selectedWeight === w ? "active" : ""}`}
                    onClick={() => setSelectedWeight(w)}
                    type="button"
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-meta" style={{ marginTop: 18 }}>
              <Text>{selectedWeight.toUpperCase()}</Text>
              <div className="rating" style={{ marginTop: 8 }}>
                <Rate disabled defaultValue={4} />
                <Text className="rating-count"> (0)</Text>
              </div>
            </div>

            <Space direction="horizontal" size="middle" style={{ marginTop: 20 }}>
              <Button className="btn-outline" onClick={() => addToCart(1)}>ADD TO CART</Button>
              <Button type="primary" className="btn-primary" onClick={handleAddAndOpen}>BUY NOW</Button>
            </Space>

            <div className="product-links" style={{ marginTop: 22 }}>
              <a href="#details">Product Details</a>
              <a href="#shipping">Delivery & Returns</a>
              <a href="#qa">Gifting</a>
            </div>
          </div>

          {/* Cart Drawer */}
          <Drawer
            title={`Your Cart (${itemCount})`}
            placement="right"
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
            width={420}
          >
            <List
              dataSource={cart}
              locale={{ emptyText: "Your cart is empty" }}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <InputNumber
                      min={1}
                      max={99}
                      value={item.qty}
                      onChange={(val) => updateQty(item.id, val)}
                    />,
                    <Button
                      danger
                      type="text"
                      icon={<DeleteOutlined />}
                      onClick={() => removeItem(item.id)}
                    />,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<img src={item.img} alt={item.title} style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 6 }} />}
                    title={<div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div>{item.title}</div>
                      <div style={{ fontWeight: 700 }}>₹{(item.price * item.qty).toLocaleString()}</div>
                    </div>}
                    description={<div>
                      <div style={{ color: "rgba(0,0,0,0.65)" }}>{item.weight}</div>
                      <div style={{ color: "rgba(0,0,0,0.45)", fontSize: 13 }}>₹{item.price.toLocaleString()} each</div>
                    </div>}
                  />
                </List.Item>
              )}
            />

            <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 14, color: "rgba(0,0,0,0.65)" }}>Total</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>₹{totalPrice.toLocaleString()}</div>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <Button onClick={() => { setDrawerOpen(false); message.info("Continue shopping"); }}>Continue</Button>
                <Button type="primary" onClick={() => { message.success("Checkout — demo"); persistCart([]); setDrawerOpen(false); }}>
                  Checkout
                </Button>
              </div>
            </div>
          </Drawer>
        </Col>
      </Row>
    </div>
    <Foot/>
    </>
  );
}
