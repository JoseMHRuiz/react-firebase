import React, { useState, useEffect } from 'react';
import { PageHeader, Input, Button } from 'antd';
import db from '../firebase';
import { navigate } from '@reach/router';

const { TextArea } = Input;

const UpdatePost = (props) => {
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

  const onTitleChange = (event) => setTitle(event.target.value);
  const onContentChange = (event) => setContent(event.target.value);

  const onUpdatePost = () => {
    let postRef = db.collection('posts').doc(props.id);

    let payload = { title, content }; // create an object without key

    postRef.update(payload).then(function (doc) {
      console.log('Document succesfully updated', doc.id);
    });

    navigate(`/posts`);
  };

  return (
    <div className='create_post_container'>
      <div className='page_header_container'>
        <PageHeader
          className='site-page-header'
          title='Edit Post'
          //   subTitle='This is a subtitle'
        />
      </div>
      <div className='post_inputs_container'>
        <div className='post_input_container'>
          <div className='post_input_title'>
            <h2>Post Title</h2>
          </div>
          <div className='post_input'>
            <Input
              placeholder='Post title'
              value={title}
              onChange={onTitleChange}
            />
          </div>
        </div>
        <div className='post_input_container'>
          <div className='post_input_content'>
            <h2>Post Content</h2>
          </div>
          <div className='post_input'>
            <TextArea
              rows={4}
              placeholder='Post content'
              value={content}
              onChange={onContentChange}
            />
          </div>
        </div>
        <div className='post_input_button'>
          <Button type='primary' size='large' onClick={onUpdatePost}>
            Edit Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
