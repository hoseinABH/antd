import React, { FC } from 'react';
import { Row, Col, Typography, Button, Input, Form } from 'antd';
const Subscribe: FC = () => {
  return (
    <Row className="subscrib-section">
      <Col className="newsletter-section">
        <Typography.Title style={{ color: '#454545' }} level={2}>
          Stay up to date!
        </Typography.Title>
        <Typography.Text className="news-content" strong>
          3-4 updates per month, spam-free, hand-crafted. Our newsletter gives
          you links, updates on fettblog.eu, conference talks, coding
          soundtracks, and much more.
        </Typography.Text>
        <Form layout="inline" className="email-form">
          <Form.Item>
            <Input
              className="email"
              type="email"
              placeholder="Enter your e-mail"
            />
          </Form.Item>
          <Button className="submit-email">
            <span
              className="effect"
              role="img"
              ria-hidden="true"
              aria-label="emojie"
            >
              ✏️
            </span>{' '}
            Subscribe
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Subscribe;
