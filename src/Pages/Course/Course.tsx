import React, { FC, useEffect } from 'react';
import { Card, Spin, Row, Col, Space, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { headingStyle, SpinStyles } from '../Home/Home';
import { getCourse, Course } from '../../redux/actions/courseActions';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers/rootReducer';
import './Course.scss';
interface CourseProps {
  course: Course | any;
  getCourse: Function;
}
interface RouteParams {
  id: number | any;
}

const CourseSingle: FC<CourseProps> = ({ course, getCourse }) => {
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    getCourse(id);

    // eslint-disable-next-line
  }, []);
  return (
    <Row style={{ margin: '2rem' }}>
      <Col
        xs={{ span: 24 }}
        lg={{ span: 15, offset: 1 }}
        style={{ marginBottom: '10rem' }}
      >
        <Typography.Title
          style={{ textAlign: 'center' }}
          level={1}
          className="hero-text"
        >
          <Link id="hero-text-one" style={headingStyle} to="/courses">
            Coureses
          </Link>
        </Typography.Title>
        <iframe
          title="dsds"
          className="ifram-video"
          src="https://www.youtube.com/embed/4by0ENDn_4M"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Col>
      <Col xs={{ span: 19, offset: 1 }} lg={{ span: 5, offset: 1 }}>
        <Typography.Title
          style={{ textAlign: 'center', paddingBottom: '2rem' }}
          level={4}
        >
          <Link style={headingStyle} to="/courses">
            Coureses List
          </Link>
        </Typography.Title>
        <Space direction="vertical" size={20}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Card.Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Card.Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Card.Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Card.Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Card.Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Space>
      </Col>
    </Row>
  );
};
const mapStateToProps = (state: StoreState): { course: Course | {} } => ({
  course: state.course,
});

export default connect(mapStateToProps, { getCourse })(CourseSingle);
