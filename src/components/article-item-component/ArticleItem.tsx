import React, { FC } from 'react';
import { Col, Typography, Space, Button } from 'antd';
import { Article } from '../../redux/actions/articleActions';
import { Link } from 'react-router-dom';

interface ArticleItemProps {
  article: Article;
  headingStyle: React.CSSProperties;
}

const ArticleItem: FC<ArticleItemProps> = ({ article, headingStyle }) => {
  return (
    <Col xs={{ span: 24 }} md={{ span: 10, offset: 2 }} className="article-col">
      <Space direction="vertical" size="middle">
        <Typography style={{ fontWeight: 'bold' }}>{article.date}</Typography>
        <Typography.Title level={3} className="hero-text">
          <Link
            id="hero-text"
            style={headingStyle}
            to={`/articles/${article.id}`}
          >
            {article.title}
          </Link>
        </Typography.Title>
        <div className="meta">
          <Space direction="horizontal">
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
                  {article.ttr}minutes
                </Typography.Text>
              </Typography>
            </div>
          </Space>
        </div>
        <Button type="dashed" danger>
          <Link to={`/articles/${article.id}`}> Read More</Link>
        </Button>
      </Space>
    </Col>
  );
};

export default ArticleItem;
