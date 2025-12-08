import React from "react";
import { Container, Nav, Navbar as BSNavbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    // Đổi background thành màu đen đậm (#111) hoặc giữ dark của Bootstrap
    <BSNavbar bg="dark" variant="dark" expand="lg" className="shadow-sm sticky-top" style={{ padding: "12px 0" }}>
      <Container>
        {/* 1. BRAND: Đổi tên và thêm Icon công nghệ */}
        <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center fw-bold" style={{ fontSize: "1.5rem", letterSpacing: "-1px" }}>
          <i className="fas fa-microchip me-2" style={{ color: "#00c3ff" }}></i>
          TechZone
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="main-navbar" />

        <BSNavbar.Collapse id="main-navbar">
          {/* 2. MENU LINKS: Thêm các mục điều hướng ở giữa */}
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className="mx-2">All Products</Nav.Link>
            <Nav.Link href="#laptops" className="mx-2">Laptops</Nav.Link>
            <Nav.Link href="#smartphones" className="mx-2">Smartphones</Nav.Link>
          </Nav>

          {/* 3. BUTTONS: Cập nhật style nút bấm */}
          <Nav className="d-flex align-items-center gap-2">
            <Button
              variant="outline-light"
              onClick={() => navigate("/login")}
              style={{ borderRadius: "20px", fontWeight: "600", padding: "6px 20px" }}
            >
              Login
            </Button>

            <Button
              variant="light"
              style={{
                borderRadius: "20px",
                backgroundColor: "#00c3ff",
                border: "none",
                color: "#000",
                fontWeight: "700",
                padding: "6px 20px"
              }}
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;