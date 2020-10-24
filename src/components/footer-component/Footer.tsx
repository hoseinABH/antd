import React, { FC } from 'react';
import './Footer.scss';
import { Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
const Footer: FC = () => {
  return (
    <div className="footer-area">
      <div className="main-frame">
        <section className="copyright">coursebase.edu © 2016 - 2020</section>
        <Row>
          <Col xs={{ span: 24 }} md={{ span: 6 }} className="footer-col">
            <Typography.Text strong>coursebase.edu</Typography.Text>
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/" className="footer-link">
              About
            </Link>
            <Link to="/" className="footer-link extra">
              Legal notice
            </Link>
            <Link to="/" className="footer-link extra">
              FAQ
            </Link>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 6 }} className="footer-col">
            <Typography.Text strong>Contact</Typography.Text>

            <Link to="/" className="footer-link">
              Speaking
            </Link>
            <Link to="/" className="footer-link">
              Newsletter
            </Link>
            <Link to="/" className="footer-link extra">
              Twitter
            </Link>
            <Link to="/" className="footer-link extra">
              Github
            </Link>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 6 }} className="footer-col">
            <Typography.Text strong>Courses</Typography.Text>
            <Link to="/" className="footer-link">
              React
            </Link>
            <Link to="/" className="footer-link">
              Node
            </Link>
            <Link to="/" className="footer-link extra">
              GrapQL
            </Link>
            <Link to="/" className="footer-link extra">
              Flutter
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
