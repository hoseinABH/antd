import React, { FC, useEffect } from 'react';
import { Row, Col, Typography, Space, Avatar, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import './Home.scss';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers/rootReducer';
import { getArticles, Article } from '../../redux/actions/articleActions';
import ArticleItem from '../../components/article-item-component/ArticleItem';
import Subscribe from '../../components/subscribe-section-component/Subscribe';
interface HomeProps {
  articles: Article[];
  getArticles: Function;
}
const Home: FC<HomeProps> = ({ articles, getArticles }) => {
  useEffect(() => {
    getArticles();
    // eslint-disable-next-line
  }, []);
  if (articles.length) {
    const singleArticle: any = articles.find((art) => art.id === 1);
    return (
      <div style={{ padding: '2rem' }}>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 18, offset: 2 }}
            className="article-col"
          >
            <Space direction="vertical" size="large">
              <Typography style={{ fontWeight: 'bold' }}></Typography>
              <Typography.Title className="hero-text">
                <Link
                  id="hero-text-one"
                  style={headingStyle}
                  to={`/articles/${singleArticle.id}`}
                >
                  {singleArticle.title}
                </Link>
              </Typography.Title>
              <div className="meta">
                <Space direction="horizontal">
                  <div className="meta-item img">
                    <Avatar
                      alt="author picture"
                      size={56}
                      src={singleArticle.img}
                    />
                  </div>
                  <div className="meta-item">
                    <Typography>
                      Written by
                      <Link className="meta-highlight" to="/users">
                        @{singleArticle.author}
                      </Link>
                    </Typography>
                  </div>
                  <div className="meta-item">
                    <Typography>
                      Reading time:
                      <Typography.Text className="meta-highlight" strong>
                        {singleArticle.ttr}minutes
                      </Typography.Text>
                    </Typography>
                  </div>
                </Space>
              </div>
              <Typography.Paragraph>{singleArticle.desc}</Typography.Paragraph>
              <Button type="dashed" danger>
                <Link to={`/articles/${singleArticle.id}`}>Read More</Link>
              </Button>
            </Space>
          </Col>

          {articles.length ? (
            articles.map((a: Article) => {
              return (
                <ArticleItem
                  key={a.id}
                  article={a}
                  headingStyle={headingStyle}
                />
              );
            })
          ) : (
            <Spin style={SpinStyles} size="large" tip="updating ..." />
          )}
        </Row>
        <Subscribe />
      </div>
    );
  } else {
    return <Spin style={SpinStyles} size="large" tip="updating ..." />;
  }
};

export const SpinStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  margin: '-50px 0px 0px -50px',
} as React.CSSProperties;

export const headingStyle = {
  background: 'linear-gradient(to right ,  #8338ec, #3a86ff)',
  webkitBackgroundClip: 'text',
  webkitTextFillColor: 'transparent',
} as React.CSSProperties;

const mapStateToProps = (state: StoreState): { articles: Article[] } => ({
  articles: state.articles,
});
export default connect(mapStateToProps, { getArticles })(Home);
