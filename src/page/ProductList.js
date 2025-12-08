import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";



function ProductList() {
  const [products, setProducts] = useState([]); // Dữ liệu gốc
  const [filteredProducts, setFilteredProducts] = useState([]); // Dữ liệu sau khi lọc

  // State để tạo danh sách options cho select box
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [filters, setFilters] = useState({
    category: "",
    brand: "", // Đổi author -> brand
    priceRange: "",
  });
  const [sortBy, setSortBy] = useState("default");



  return (
    <div style={{ backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <Navbar />

      <Container style={{ padding: "40px 0" }}>
        <Row>
          {/* 🎚️ Sidebar Filter */}
          <Col md={3} className="mb-4">
            <div className="p-4 shadow-sm rounded bg-white sticky-top" style={{ top: "90px" }}>
              <h5 className="fw-bold mb-4 d-flex align-items-center">
                <i className="fas fa-filter me-2 text-primary"></i> Filters
              </h5>

              {/* Danh mục */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Category</Form.Label>
                <Form.Select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                >
                  <option value="">All Categories</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Thương hiệu (Thay Author -> Brand) */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Brand</Form.Label>
                <Form.Select
                  value={filters.brand}
                  onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                >
                  <option value="">All Brands</option>
                  {brands.map((brand, index) => (
                    <option key={index} value={brand}>{brand}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Khoảng giá (Cập nhật giá Tech) */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Price Range</Form.Label>
                <Form.Select
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                >
                  <option value="">All Prices</option>
                  <option value="low">Under 10 Million</option>
                  <option value="mid">10 - 25 Million</option>
                  <option value="high">Above 25 Million</option>
                </Form.Select>
              </Form.Group>

              <Button
                variant="dark"
                className="w-100"
                onClick={() => setFilters({ category: "", brand: "", priceRange: "" })}
              >
                Reset Filters
              </Button>
            </div>
          </Col>

          {/* 📱 Product List */}
          <Col md={9}>
            <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-white rounded shadow-sm">
              <h4 className="fw-bold m-0">
                All Products <span className="text-muted fs-6">({filteredProducts.length} items)</span>
              </h4>
              <Form.Select
                style={{ width: "200px", border: "1px solid #ced4da" }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort by: Default</option>
                <option value="newest">Newest Arrivals</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </Form.Select>
            </div>

            <Row>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Col lg={4} md={6} className="mb-4" key={product.id}>
                    {/* Sử dụng component con ProductCard */}
                  </Col>
                ))
              ) : (
                <Col md={12}>
                  <div className="text-center py-5 bg-white rounded shadow-sm">
                    <i className="fas fa-search fa-3x text-muted mb-3"></i>
                    <h5>No products found matching your criteria.</h5>
                    <p className="text-muted">Try removing some filters.</p>
                    <Button
                      variant="outline-primary"
                      onClick={() => setFilters({ category: "", brand: "", priceRange: "" })}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default ProductList;