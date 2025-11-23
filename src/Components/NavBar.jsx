// Navbar.jsx
import React, { useEffect, useState } from "react";
import { MenuOutlined, ShoppingCartOutlined, UserOutlined, ShopOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Drawer, Menu } from "antd";

const { SubMenu } = Menu;
const LOCAL_KEY = "cart";

const getCartCountFromStorage = () => {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    return parsed.reduce((s, it) => s + (it.qty || 0), 0);
  } catch (e) {
    console.error("getCartCountFromStorage error", e);
    return 0;
  }
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(getCartCountFromStorage());
  const navigate = useNavigate();

  useEffect(() => {
    // When other tabs change localStorage
    const onStorage = (ev) => {
      if (ev.key === LOCAL_KEY) {
        setCartCount(getCartCountFromStorage());
      }
    };

    // When same-tab code dispatches cartUpdated
    const onCartUpdated = () => {
      setCartCount(getCartCountFromStorage());
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("cartUpdated", onCartUpdated);

    // cleanup
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("cartUpdated", onCartUpdated);
    };
  }, []);

  const goTo = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <MenuOutlined className="menu-icon" onClick={() => setOpen(true)} />
        <div className="navbar-logo" onClick={() => goTo("/")}>Z PRINCESS SAFFRON</div>

        <div className="nav-icons">
          <UserOutlined className="nav-icon" onClick={() => goTo("/login")} />
          <ShopOutlined className="nav-icon" onClick={() => goTo("/products")} />

          <Badge count={cartCount} overflowCount={99}>
            <ShoppingCartOutlined className="nav-icon" onClick={() => goTo("/cart")} />
          </Badge>
        </div>
      </div>

      <Drawer title="Menu" placement="left" onClose={() => setOpen(false)} open={open} className="glass-drawer">
        <Menu mode="inline" selectable={false}>
          <Menu.Item key="home" onClick={() => goTo("/")}>Home</Menu.Item>

          <SubMenu key="about" title="KNOWLEDGE ABOUT SAFFRON">
            <Menu.Item key="insight" onClick={() => goTo("/team")}>INSIGHT</Menu.Item>
            <Menu.Item key="kashmir" onClick={() => goTo("/compay")}>KASHMIRI SAFFRON</Menu.Item>
          </SubMenu>

          <Menu.Item key="products" onClick={() => goTo("/products")}>PRODUCTS</Menu.Item>
          <Menu.Item key="contact" onClick={() => goTo("/us")}>WHY CHOOSE US</Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
}

