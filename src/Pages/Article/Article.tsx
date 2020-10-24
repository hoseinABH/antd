import React, { FC, useEffect, useState } from 'react';
import { HomeOutlined, ReadOutlined } from '@ant-design/icons';
import {
  Row,
  Col,
  Typography,
  Space,
  Spin,
  Avatar,
  Affix,
  Badge,
  Breadcrumb,
} from 'antd';
import { Link, useParams } from 'react-router-dom';
import { headingStyle, SpinStyles } from '../Home/Home';
import './Article.scss';
import { getArticle, Article } from '../../redux/actions/articleActions';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers/rootReducer';

interface ArticleProps {
  article: Article | any;
  getArticle: Function;
}
interface RouteParams {
  id: number | any;
}

const ArticleSingle: FC<ArticleProps> = ({ getArticle, article }) => {
  const [feed, showFeed] = useState(false);
  const [count, setCount] = useState(0);
  const [feedback, setFeedback] = useState(false);

  const params = useParams<RouteParams>();

  useEffect(() => {
    getArticle(params.id);

    window.addEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, []);

  const increase = (): void => {
    setCount(count + 1);
  };
  const onFeedBackClick = () => {
    setFeedback(true);
    setTimeout(function () {
      setFeedback(false);
    }, 300);
    increase();
  };

  const handleScroll = (): void => {
    if (window.scrollY > 150) {
      showFeed(true);
    } else {
      showFeed(false);
    }
  };

  if (article.id) {
    return (
      <div style={{ padding: '2rem' }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">
              <HomeOutlined />
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Link to="/articles">
              <ReadOutlined />
              <span> Articles List</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{article.title}</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 20, offset: 2 }}
            lg={{ span: 14, offset: 2 }}
            className="article-col"
          >
            <Space direction="vertical" size="large">
              <Typography.Title level={1} className="hero-text">
                <Link id="hero-text-one" style={headingStyle} to="/article">
                  {article.title}
                </Link>
              </Typography.Title>
              <Space direction="horizontal">
                <div className="meta">
                  <div className="meta-item img">
                    <Avatar alt="author picture" size={56} src={article.img} />
                  </div>

                  <div className="meta-item">
                    <Typography>
                      Published on
                      <Typography.Text className="meta-highlight" strong>
                        {article.date}
                      </Typography.Text>
                    </Typography>
                  </div>
                  <div className="meta-item">
                    <Typography>
                      Written by
                      <Link className="meta-highlight" to="/users">
                        @{article.author}
                      </Link>
                    </Typography>
                  </div>
                  <div className="meta-item">
                    <Typography>
                      Reading time:
                      <Typography.Text className="meta-highlight" strong>
                        {article.ttr} minutes
                      </Typography.Text>
                    </Typography>
                  </div>
                </div>
              </Space>
              <Typography.Paragraph copyable={true}>
                {article.body}
              </Typography.Paragraph>
            </Space>
          </Col>
          {feed ? (
            <Col
              style={{ marginTop: '2rem' }}
              md={{ span: 20, offset: 2 }}
              lg={{ span: 4, offset: 4 }}
            >
              <Affix offsetTop={150}>
                <div>
                  <Badge
                    count={count}
                    style={{ backgroundColor: '#8338ec' }}
                    offset={[10, 0]}
                  >
                    <span
                      onClick={onFeedBackClick}
                      className={`bubbly-button ${feedback ? 'animate' : ''} `}
                    >
                      &#127881;
                    </span>
                  </Badge>
                </div>
              </Affix>
            </Col>
          ) : (
            ''
          )}
        </Row>
      </div>
    );
  } else {
    return <Spin style={SpinStyles} size="large" tip="updating ..." />;
  }
};
const mapStateToProps = (state: StoreState): { article: Article[] | {} } => ({
  article: state.article,
});

export default connect(mapStateToProps, { getArticle })(ArticleSingle);
