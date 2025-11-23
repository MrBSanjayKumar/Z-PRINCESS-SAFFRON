
import React, { useEffect, useState } from "react";
import { Row, Col, Image, Button, Typography, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import Foot from "../Footer/Footer";

const { Title, Text } = Typography;
const LOCAL_KEY = "cart";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
    }
  }, []);

  const persist = (next) => {
    setCart(next);
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
    // storage event
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    const next = cart.map((c) => (c.id === id ? { ...c, qty } : c));
    persist(next);
  };

  const removeItem = (id) => {
    const next = cart.filter((c) => c.id !== id);
    persist(next);
    message.success("Item removed");
  };

  const clearCart = () => {
    persist([]);
  };

  const totalQty = cart.reduce((s, it) => s + it.qty, 0);
  const totalPrice = cart.reduce((s, it) => s + it.qty * it.price, 0);

  const handleCheckout = () => {
    if (!cart.length) {
      message.info("Your cart is empty");
      return;
    }
    // show success
    message.success("Checkout successful (demo)");
    clearCart();
  };

  return (
    <>
    <div className="cart-page">
      <div className="cart-top">
        <Title level={4} className="cart-heading">YOUR SELECTIONS</Title>
      </div>

      <div className="cart-divider" />

      <div className="cart-container">
        {/* Items list */}
        {cart.length === 0 ? (
          <div className="cart-empty">Your cart is empty.</div>
        ) : (
          cart.map((item) => (
            <div className="cart-row" key={item.id}>
              
              <div className="cart-left">
                <Image
                  src={item.img}
                  alt={item.title}
                  preview={false}
                  width={180}
                  height={120}
                  style={{ objectFit: "cover", borderRadius: 6 }}
                />
                <div className="cart-left-text">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-weight">{item.weight}</div>
                  <button
                    className="cart-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>

              
              <div className="cart-center">
                <div className="qty-controls">
                  <button
                    className="qty-btn"
                    onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>

                  <div className="qty-value">{item.qty}</div>

                  <button
                    className="qty-btn"
                    onClick={() => updateQty(item.id, Math.min(99, item.qty + 1))}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              
              <div className="cart-right">
                <div className="cart-price">₹{(item.price * item.qty).toLocaleString()}</div>
              </div>
            </div>
          ))
        )}

        
        <div className="cart-line" />

        
        <div className="cart-summary-row">
          <div className="summary-left">
            <Text strong>Total items:</Text>
            <Text className="summary-value"> {totalQty}</Text>
          </div>

          <div className="summary-center">
            <Text strong>Grand Total:</Text>
            <Text className="summary-value"> ₹{totalPrice.toLocaleString()}</Text>
          </div>

          <div className="summary-actions">
            <Button type="default" onClick={() => navigate("/products")}>
              CONTINUE SHOPPING
            </Button>

            <Button type="primary" onClick={handleCheckout}>
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>

      
    </div>
    <Foot/>
    </>
  );
}
