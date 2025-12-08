import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  };



  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px 0"
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={7} sm={9}>


            {/* Login Card */}
            <Card className="shadow-lg border-0" style={{ borderRadius: "16px" }}>
              <Card.Body style={{ padding: "40px" }}>
                {/* Login Header */}
                <div className="text-center mb-4">
                  <h1 >
                    Login
                  </h1>
                </div>

                {/* Login Form */}
                <Form>
                  {/* Email Field */}
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "500", color: "#2c3e50" }}>
                      Email Address
                    </Form.Label>
                    <div className="position-relative">
                      <i
                        className="fas fa-envelope position-absolute"
                        style={{
                          left: "12px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#6c757d",
                          zIndex: 10
                        }}
                      ></i>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        onChange={handleChange}
                        required
                        style={{
                          paddingLeft: "40px",
                          height: "48px",
                          borderRadius: "8px",
                          border: "1px solid #e9ecef",
                          fontSize: "14px"
                        }}
                      />
                    </div>
                  </Form.Group>

                  {/* Password Field */}
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "500", color: "#2c3e50" }}>
                      Password
                    </Form.Label>
                    <div className="position-relative">
                      <i
                        className="fas fa-lock position-absolute"
                        style={{
                          left: "12px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#6c757d",
                          zIndex: 10
                        }}
                      ></i>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{
                          paddingLeft: "40px",
                          paddingRight: "40px",
                          height: "48px",
                          borderRadius: "8px",
                          border: "1px solid #e9ecef",
                          fontSize: "14px"
                        }}
                      />
                      <Button
                        variant="link"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          right: "8px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          border: "none",
                          background: "none",
                          color: "#6c757d",
                          padding: "4px 8px"
                        }}
                      >
                        <i className={`fas fa-eye${showPassword ? '-slash' : ''}`}></i>
                      </Button>
                    </div>
                  </Form.Group>

                  {/* Remember Me & Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check
                      type="checkbox"
                      name="rememberMe"
                      label="Remember me"
                      onChange={handleChange}
                      style={{ fontSize: "14px", color: "#6c757d" }}
                    />
                    <Link
                      to="/forgotpassword"
                      style={{
                        fontSize: "14px",
                        color: "#007bff",
                        textDecoration: "none"
                      }}
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    style={{
                      width: "100%",
                      height: "48px",
                      backgroundColor: "#2c3e50",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "600",
                      marginBottom: "20px"
                    }}
                  >
                    Login
                  </Button>

                </Form>
              </Card.Body>
            </Card>

            {/* Register Link */}
            <div className="text-center mt-4">
              <p style={{ fontSize: "14px", color: "#6c757d", margin: 0 }}>
                Don't have an account? {" "}
                <Link
                  to="/register"
                  style={{
                    color: "#007bff",
                    textDecoration: "none",
                    fontWeight: "500"
                  }}
                >
                  Register now →
                </Link>
              </p>
            </div>


          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;