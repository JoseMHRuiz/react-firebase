import React from 'react';
import { PageHeader } from 'antd';
import './Posts.css';
import PostSnippet from './PostSnippet';
import api from '../mock_api';
import _ from 'lodash';

const Posts = (props) => {
  return (
    <div className='posts_contariner'>
      <div className='page_header_container'>
        <PageHeader
          className='site-page-header'
          title='Posts'
          subTitle='This is a subtitle'
        />
      </div>
      <div className='articles_container'>
        {/* {' '}
        {_.map(api, (article) => {
          return (
            <Post
              key={article.title}
              title={article.title}
              content={article.content}
            />
          );
        })}{' '} */}

        {api.map((article, idx) => (
          <PostSnippet
            key={idx}
            id={idx}
            title={article.title}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
