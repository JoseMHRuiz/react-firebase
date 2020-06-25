import React, { useState, useEffect } from 'react';
import { PageHeader } from 'antd';
import './Posts.css';
import PostSnippet from './PostSnippet';
import _ from 'lodash';
import db from '../firebase';

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postRef = db.collection('posts');
    postRef.get().then((posts) => {
      posts.forEach((post) => {
        let data = post.data();
        let { id } = post;
        let payload = {
          id,
          ...data,
        };

        setPosts((posts) => [...posts, payload]);
      });
    });
  }, []);
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

        {posts.map((article, idx) => (
          <PostSnippet
            key={idx}
            id={article.id}
            title={_.capitalize(article.title)}
            content={article.content.substring(0, 1000) + '...'}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
