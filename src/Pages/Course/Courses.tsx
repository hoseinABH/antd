import React, { FC, useState, useEffect } from 'react';
import { Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { headingStyle } from '../Home/Home';
import { Course } from '../../redux/actions/courseActions';
import { connect } from 'react-redux';
import { getCourses } from '../../redux/actions/courseActions';
import { StoreState } from '../../redux/reducers/rootReducer';
import CourseItem from '../../components/course-item-component/CourseItem';

interface CoursesProps {
  courses: Course[];
  getCourses: Function;
}

const Coureses: FC<CoursesProps> = ({ courses, getCourses }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses();
    setInterval(() => setLoading(false), 2000);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Typography.Title
        style={{ textAlign: 'center', padding: '4rem 2rem' }}
        level={1}
        className="hero-text"
      >
        <Link id="hero-text-one" style={headingStyle} to="/courses">
          Coureses
        </Link>
      </Typography.Title>

      <Row>
        {courses.length &&
          courses.map((course) => {
            return (
              <CourseItem loading={loading} key={course.id} course={course} />
            );
          })}
      </Row>
    </>
  );
};
const mapStateToProps = (state: StoreState): { courses: Course[] } => {
  return { courses: state.courses };
};

export default connect(mapStateToProps, { getCourses })(Coureses);
