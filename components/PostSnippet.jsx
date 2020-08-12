import React from 'react';
import { Card } from 'antd';
import { Link } from '@reach/router';

const PostSnippet = (props) => {
  return (
    <div className='article_container'>
      <Card
        style={{ marginTop: 16 }}
        type='inner'
        title={props.title}
        extra={
          <div className='post_snipet_links'>
            <Link to={`/post/${props.id}`} style={{ marginRight: '15px' }}>
              Read Full Article
            </Link>

            <Link to={`/update_post/${props.id}`}>Edit</Link>
          </div>
        }
      >
        <div className='article_content'>
          {props.content.split('\n').map((paragraph, idx) => {
            return <div key={idx}>{paragraph}</div>;
          })}
        </div>
      </Card>
    </div>
  );
};

export default PostSnippet;
