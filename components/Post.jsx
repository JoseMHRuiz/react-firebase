import React, { useState, useEffect } from 'react';
import { PageHeader, Card } from 'antd';
import api from '../mock_api';

const Post = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    let post = api[props.id];
    setTitle(post.title);
    setContent(post.content);
  }, []);

  return (
    <div className='post_container'>
      <div className='page_header_container'>
        <PageHeader
          className='site-page-header'
          title={title}
          subTitle='This is a subtitle'
        />
      </div>
      <div className='article_container'>
        <Card style={{ marginTop: 20 }}>
          {content.split('\n').map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>;
          })}
        </Card>
      </div>
    </div>
  );
};

export default Post;
