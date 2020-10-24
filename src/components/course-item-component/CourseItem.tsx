import React, { FC } from 'react';
import { Course } from '../../redux/actions/courseActions';
import { Skeleton, Card, Avatar, Col, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { EllipsisOutlined } from '@ant-design/icons';

interface CourseItemProps {
  course: Course;
  loading: boolean;
}
const CourseItem: FC<CourseItemProps> = ({ course, loading }) => {
  return (
    <Col
      xs={{ span: 11, offset: 3 }}
      md={{ span: 8, offset: 2 }}
      lg={{ span: 7, offset: 1 }}
      style={{ padding: '1.5rem 0 ' }}
    >
      <Skeleton loading={loading} avatar active>
        <Card
          hoverable
          style={{
            width: 300,
            marginTop: 16,
          }}
          cover={<img alt={course.desc} src={course.img} />}
          actions={[
            <Rate
              disabled
              allowHalf
              style={{
                color: '  #8338ec',
                fontSize: '1rem',
              }}
              defaultValue={course.rate}
            />,
            <Link to={`/courses/${course.id}`}>
              <EllipsisOutlined key="ellipsis" />,
            </Link>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar src={course.InsPic} />}
            title={course.title}
            description={course.desc}
          />
        </Card>
      </Skeleton>
    </Col>
  );
};

export default CourseItem;
