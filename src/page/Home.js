import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
function Home() {
  const navigate = useNavigate();

  // 1. Cập nhật dữ liệu giả thành Đồ Công Nghệ
  const mockProducts = [
    {
      id: 1,
      title: "MacBook Pro M3 Max",
      brand: "Apple",
      category: "Laptop",
      price: 45000000,
      originalPrice: 48000000,
      discount: 15,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      category: "Smartphone",
      price: 32000000,
      originalPrice: 35000000,
      discount: 10,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Sony WH-1000XM5",
      brand: "Sony",
      category: "Audio",
      price: 8500000,
      originalPrice: 9500000,
      discount: 12,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "iPad Pro 12.9 M2",
      brand: "Apple",
      category: "Tablet",
      price: 28000000,
      originalPrice: 30000000,
      discount: 8,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop"
    },
  ];

  const renderStars = (rating) => {
    return (
      <span style={{ color: "#00c3ff", fontSize: "0.9rem" }}> {/* Đổi màu sao sang xanh cyan cho chất công nghệ */}
        {"★".repeat(Math.round(rating))}
        {"☆".repeat(5 - Math.round(rating))}
      </span>
    );
  };

  return (
    <div style={{ backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)", // Gradient màu tối công nghệ
          color: "white",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              {/* Badge */}
              <div className="mb-3">
                <span
                  style={{
                    backgroundColor: "#00c3ff",
                    color: "#000",
                    padding: "6px 16px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}
                >
                  New Arrivals
                </span>
              </div>

              <h1
                style={{
                  fontSize: "56px",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  marginBottom: "20px",
                  textShadow: "0px 0px 20px rgba(0,195,255,0.3)"
                }}
              >
                Experience the Future <br /> With TechZone
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "30px",
                  color: "#e9ecef",
                  maxWidth: "500px"
                }}
              >
                Upgrade your life with the latest gadgets.
                Laptops, Smartphones, and Accessories with premium warranty.
              </p>

              <div className="d-flex gap-3">
                <Button
                  size="lg"
                  onClick={() => navigate("/products")}
                  style={{
                    backgroundColor: "#00c3ff",
                    color: "#000",
                    border: "none",
                    borderRadius: "5px",
                    padding: "14px 35px",
                    fontWeight: "700"
                  }}
                >
                  SHOP NOW
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  style={{
                    borderRadius: "5px",
                    padding: "14px 35px",
                    fontWeight: "600",
                    borderColor: "#fff"
                  }}
                  onClick={() => {
                    const section = document.getElementById("featured-products");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  VIEW SPECS
                </Button>
              </div>
            </Col>

            <Col lg={6} className="text-center position-relative">
              {/* Hình trang trí công nghệ */}
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Thay icon sách bằng icon laptop/chip */}
                <i
                  className="fas fa-laptop-code"
                  style={{
                    fontSize: "200px",
                    color: "rgba(255,255,255,0.1)",
                    filter: "drop-shadow(0 0 15px rgba(0,195,255,0.5))"
                  }}
                ></i>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                  <i className="fas fa-microchip" style={{ fontSize: "80px", color: "#00c3ff" }}></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: "#fff", padding: "40px 0", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
        <Container>
          <Row className="text-center text-dark">
            <Col md={3}>
              <div className="mb-2">
                <i className="fas fa-shipping-fast mb-2 text-primary" style={{ fontSize: "28px" }}></i>
                <h5 style={{ fontWeight: "700", margin: "8px 0 4px 0" }}>Fast Delivery</h5>
                <p style={{ fontSize: "14px", margin: 0, color: "#666" }}>Within 2 hours</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="mb-2">
                <i className="fas fa-tools mb-2 text-primary" style={{ fontSize: "28px" }}></i>
                <h5 style={{ fontWeight: "700", margin: "8px 0 4px 0" }}>Tech Support</h5>
                <p style={{ fontSize: "14px", margin: 0, color: "#666" }}>Lifetime Warranty</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="mb-2">
                <i className="fas fa-shield-alt mb-2 text-primary" style={{ fontSize: "28px" }}></i>
                <h5 style={{ fontWeight: "700", margin: "8px 0 4px 0" }}>Official Agent</h5>
                <p style={{ fontSize: "14px", margin: 0, color: "#666" }}>100% Authentic</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="mb-2">
                <i className="fas fa-undo mb-2 text-primary" style={{ fontSize: "28px" }}></i>
                <h5 style={{ fontWeight: "700", margin: "8px 0 4px 0" }}>Easy Return</h5>
                <p style={{ fontSize: "14px", margin: 0, color: "#666" }}>30 Days Policy</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" style={{ padding: "80px 0" }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "16px", textTransform: "uppercase" }}>
              Trending Devices
            </h2>
            <div style={{ width: "60px", height: "4px", backgroundColor: "#00c3ff", margin: "0 auto 20px auto" }}></div>
          </div>

          <Row>
            {mockProducts.map((product) => (
              <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
                <Card
                  className="h-100 shadow-sm border-0"
                  style={{ cursor: "pointer", transition: "all 0.3s ease", borderRadius: "12px", overflow: "hidden" }}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div style={{ position: "relative", height: "250px", padding: "0", backgroundColor: "#f8f9fa" }}>
                    {product.discount && (
                      <Badge bg="danger" style={{ position: "absolute", top: "15px", left: "15px", padding: "8px 12px", borderRadius: "4px" }}>
                        -{product.discount}%
                      </Badge>
                    )}
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ height: "100%", width: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column p-4">
                    <div className="text-muted small mb-1">{product.brand}</div>
                    <Card.Title style={{ fontSize: "1.1rem", fontWeight: "bold", minHeight: "50px", lineHeight: "1.4" }}>
                      {product.title}
                    </Card.Title>

                    <div className="mb-2">{renderStars(product.rating)}</div>

                    <div className="mt-auto d-flex align-items-center justify-content-between">
                      <div>
                        {product.originalPrice && (
                          <div className="text-muted text-decoration-line-through small">
                            {product.originalPrice.toLocaleString()}đ
                          </div>
                        )}
                        <div className="text-primary fw-bold" style={{ fontSize: "1.2rem" }}>
                          {product.price.toLocaleString()}đ
                        </div>
                      </div>
                      <Button
                        variant="light"
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#eef2f5" }}
                      >
                        <i className="fas fa-cart-plus"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Best Sellers Section */}
      <section style={{ padding: "80px 0", backgroundColor: "#fff" }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "16px", textTransform: "uppercase" }}>
              Best Selling
            </h2>
            <div style={{ width: "60px", height: "4px", backgroundColor: "#00c3ff", margin: "0 auto 20px auto" }}></div>
          </div>

          <Row>
            {mockProducts.slice(0, 2).map((product) => (
              <Col key={product.id} lg={6} md={6} xs={12} className="mb-4">
                <Card className="border-0 shadow h-100 flex-row overflow-hidden" style={{ borderRadius: "15px" }}>
                  <div style={{ width: "45%", position: "relative" }}>
                    <Card.Img
                      src={product.image}
                      style={{ height: "100%", width: "100%", objectFit: "cover", position: "absolute" }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column justify-content-center p-4" style={{ width: "55%" }}>
                    <Badge bg="dark" className="w-auto mb-2 align-self-start">{product.category}</Badge>
                    <h4 className="fw-bold">{product.title}</h4>
                    <p className="text-muted small mb-2">High performance, sleek design, and powerful features.</p>
                    <div className="mb-3">{renderStars(product.rating)}</div>
                    <h3 className="text-primary fw-bold mb-3">{product.price.toLocaleString()}đ</h3>
                    <Button variant="dark" className="w-100" onClick={() => navigate(`/product/${product.id}`)}>
                      Buy Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;