import React, { FC, useEffect } from 'react';
import { Typography, Space, Col, Row, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { headingStyle, SpinStyles } from '../Home/Home';
import { getArticles, Article } from '../../redux/actions/articleActions';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers/rootReducer';

interface ArticlesProps {
  articles: Article[];
  getArticles: Function;
}
const Articles: FC<ArticlesProps> = ({ getArticles, articles }) => {
  useEffect(() => {
    getArticles();

    //eslint-disable-next-line
  }, []);
  if (articles.length) {
    return (
      <Row style={{ padding: '2rem' }}>
        <Col
          xs={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 14, offset: 2 }}
          className="article-col"
        >
          <Space direction="vertical" size="large">
            <Typography.Title level={1} className="hero-text">
              <Link style={headingStyle} to="/article">
                All articles
              </Link>
            </Typography.Title>
            {articles.map((article) => {
              return (
                <div style={{ padding: '1rem 0' }}>
                  <div className="artilces-info">
                    <Typography style={{ fontWeight: 700, fontSize: '1rem' }}>
                      {article.date} |
                    </Typography>

                    <Typography
                      style={{
                        fontWeight: 700,
                        fontSize: '1rem',
                        marginLeft: '.5rem',
                      }}
                    >
                      <Link
                        style={{
                          color: '#555',
                          borderBottom: '1px dashed currentColor',
                        }}
                        to="/"
                      >
                        {article.author}
                      </Link>
                    </Typography>
                  </div>
                  <Typography.Title level={4}>
                    <Link
                      id="hero-text"
                      style={{
                        borderBottom: '1px dashed currentColor',
                      }}
                      to={`/articles/${article.id}`}
                    >
                      {article.title}
                    </Link>
                  </Typography.Title>
                </div>
              );
            })}
          </Space>
        </Col>
      </Row>
    );
  } else {
    return <Spin style={SpinStyles} size="large" tip="updating ..." />;
  }
};
const mapStateToProps = (state: StoreState): { articles: Article[] } => {
  return { articles: state.articles };
};
export default connect(mapStateToProps, { getArticles })(Articles);
