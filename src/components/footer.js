import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Footer() {
    return (
        <footer style={{ backgroundColor: "#111", color: "white", padding: "60px 0", marginTop: "auto" }}>
            <Container>
                <Row>
                    {/* Cột 1: Thông tin thương hiệu */}
                    <Col md={3} className="mb-4">
                        <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-microchip me-2" style={{ color: "#00c3ff", fontSize: "24px" }}></i>
                            <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-1px" }}>TechZone</span>
                        </div>
                        <p style={{ fontSize: "14px", color: "#999", lineHeight: "1.6" }}>
                            Vietnam's No.1 Tech Retailer. <br />
                            We provide authentic gadgets, premium accessories, and professional services.
                        </p>
                    </Col>

                    {/* Cột 2: Sản phẩm */}
                    <Col md={3} className="mb-4">
                        <h6 style={{ fontWeight: "700", marginBottom: "20px", color: "#fff" }}>PRODUCTS</h6>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li className="mb-2"><a href="/products" className="text-secondary text-decoration-none">Laptops & PCs</a></li>
                            <li className="mb-2"><a href="/products" className="text-secondary text-decoration-none">Smartphones</a></li>
                            <li className="mb-2"><a href="/products" className="text-secondary text-decoration-none">Tablets</a></li>
                            <li className="mb-2"><a href="/products" className="text-secondary text-decoration-none">Audio & Gear</a></li>
                        </ul>
                    </Col>

                    {/* Cột 3: Hỗ trợ */}
                    <Col md={3} className="mb-4">
                        <h6 style={{ fontWeight: "700", marginBottom: "20px", color: "#fff" }}>SUPPORT</h6>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Warranty Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Driver Download</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Store Locator</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Contact Us</a></li>
                        </ul>
                    </Col>

                    {/* Cột 4: Đăng ký nhận tin */}
                    <Col md={3} className="mb-4">
                        <h6 style={{ fontWeight: "700", marginBottom: "20px", color: "#fff" }}>NEWSLETTER</h6>
                        <p style={{ fontSize: "14px", color: "#999" }}>
                            Subscribe to get latest tech news and secret deals.
                        </p>
                        <div className="d-flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                style={{
                                    flex: 1,
                                    padding: "10px",
                                    border: "none",
                                    borderRadius: "4px 0 0 4px",
                                    outline: "none"
                                }}
                            />
                            <Button
                                style={{
                                    backgroundColor: "#00c3ff",
                                    color: "#000",
                                    border: "none",
                                    borderRadius: "0 4px 4px 0",
                                    fontWeight: "bold"
                                }}
                            >
                                GO
                            </Button>
                        </div>
                    </Col>
                </Row>

                <hr style={{ margin: "40px 0", borderColor: "#333" }} />

                <div className="text-center">
                    <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
                        © 2025 TechZone Retail Group. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;