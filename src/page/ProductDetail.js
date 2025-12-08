import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Form, Badge } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

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
    reviews: 85,
    description: "The most powerful MacBook Pro ever is here. With the blazing-fast M3 Max chip, get incredible performance and amazing battery life. Featuring a stunning Liquid Retina XDR display and all the ports you need.",
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
    reviews: 120,
    description: "Unleash your creativity, productivity, and possibilities with the Samsung Galaxy S24 Ultra. featuring AI integration, a 200MP camera system, and the powerful Snapdragon 8 Gen 3 for Galaxy.",
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
    reviews: 45,
    description: "Sony's best noise cancelling headphones yet. With two processors controlling eight microphones, Auto NC Optimizer for automatically optimizing noise cancelling based on your wearing conditions and environment.",
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
    reviews: 60,
    description: "iPad Pro. With astonishing performance, superfast wireless connectivity, and next-generation Apple Pencil experience. Plus, powerful new productivity and collaboration features in iPadOS.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop"
  },
];

function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Đổi tên state từ 'book' sang 'product'
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const foundProduct = mockProducts.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null);
    }

  }, [id]);

  if (!product) {
    return (
      <>
        <Navbar />
        <Container style={{ padding: "100px 0", textAlign: "center" }}>
          <h3>Product not found!</h3>
          <Button variant="dark" onClick={() => navigate("/")}>Back to Store</Button>
        </Container>
      </>
    );
  }

  return (
    <div style={{ backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <Navbar />

      {/* PRODUCT INFO SECTION */}
      <section style={{ padding: "60px 0" }}>
        <Container>
          <Row className="g-5">
            {/* Cột Trái: Ảnh Sản phẩm */}
            <Col md={6}>
              <Card className="border-0 shadow-sm h-100" style={{ borderRadius: "15px", overflow: "hidden" }}>
                <div style={{
                  height: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff"
                }}>
                  <Card.Img
                    src={product.image}
                    alt={product.title}
                    style={{
                      maxHeight: "90%",
                      maxWidth: "90%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Card>
            </Col>

            {/* Cột Phải: Thông tin chi tiết */}
            <Col md={6}>
              <div className="ps-md-4">
                <Badge bg="primary" className="mb-2">{product.category}</Badge>
                <h1 style={{ fontWeight: "800", fontSize: "2.5rem" }}>{product.title}</h1>
                <h5 style={{ color: "#6c757d", fontWeight: "500" }}>Brand: <span className="text-dark fw-bold">{product.brand}</span></h5>

                {/* Rating */}
                <div className="d-flex align-items-center mb-4 mt-3">
                  <span style={{ color: "#00c3ff", fontSize: "1.3rem" }}>
                    {"★".repeat(Math.round(product.rating))}
                    {"☆".repeat(5 - Math.round(product.rating))}
                  </span>
                  <span className="ms-2 text-muted">
                    ({product.reviews} verified reviews)
                  </span>
                </div>

                {/* Giá tiền */}
                <div className="p-3 bg-white rounded shadow-sm mb-4" style={{ borderLeft: "5px solid #00c3ff" }}>
                  {product.originalPrice && (
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-muted text-decoration-line-through">
                        {product.originalPrice.toLocaleString()} VND
                      </span>
                      {product.discount && (
                        <Badge bg="danger">-{product.discount}% OFF</Badge>
                      )}
                    </div>
                  )}
                  <h2 className="text-primary fw-bold m-0 mt-1" style={{ fontSize: "2.5rem" }}>
                    {product.price.toLocaleString()} VND
                  </h2>
                </div>

                <p className="text-secondary" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
                  {product.description}
                </p>

                {/* Specs giả lập */}
                <ul className="list-unstyled text-muted small mb-4">
                  <li><i className="fas fa-check-circle text-success me-2"></i>Official Warranty (12 months)</li>
                  <li><i className="fas fa-check-circle text-success me-2"></i>Free Shipping Nationwide</li>
                  <li><i className="fas fa-check-circle text-success me-2"></i>7 Days Return Policy</li>
                </ul>

                <div className="d-flex gap-3 mt-4">
                  <Button variant="dark" size="lg" className="flex-grow-1" style={{ borderRadius: "8px", fontWeight: "600" }}>
                    <i className="fas fa-cart-plus me-2"></i>
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="lg"
                    style={{ borderRadius: "8px", fontWeight: "600" }}
                    onClick={() => navigate("/")}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default ProductDetail;