import React, { useState, useEffect } from 'react';
import { PageHeader, Card } from 'antd';
import api from '../mock_api';
import db from '../firebase';

const Post = (props) => {
  console.log(props);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    let postRef = db.collection('posts').doc(props.id);

    postRef.get().then((doc) => {
      let { content, title } = doc.data();
      setTitle(title);
      setContent(content);
    });
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
