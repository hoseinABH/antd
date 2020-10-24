import React, { FC } from 'react';
import { Empty, Button } from 'antd';
import { useLocation } from 'react-router-dom';
import history from '../../histoty';
const NotFound: FC = () => {
  const location = useLocation();

  return (
    <Empty
      style={{ padding: '5rem 2rem' }}
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 100,
      }}
      description={<span>The {location.pathname} url NotFound (404) </span>}
    >
      <Button onClick={() => history.push('/')} type="dashed" danger>
        Back to home
      </Button>
    </Empty>
  );
};

export default NotFound;
