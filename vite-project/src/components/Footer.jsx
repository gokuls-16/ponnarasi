import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Brand Section */}
          <div className="col-md-4 mb-3">
            <h4 className="fw-bold">MyStore</h4>
            <p className="small">
              Your one-stop online shop for all trending products.  
              Quality guaranteed. Fast delivery. Best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/cart" className="text-light text-decoration-none">Cart</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/admin" className="text-light text-decoration-none">Admin</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center small">
          © {new Date().getFullYear()}Gokul  MyStore. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;