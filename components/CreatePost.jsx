import React from 'react';
import { PageHeader, Input, Button } from 'antd';

const { TextArea } = Input;

const CreatePost = (props) => {
  return (
    <div className='create_post_container'>
      <div className='page_header_container'>
        <PageHeader
          className='site-page-header'
          title='Create Post'
          subTitle='This is a subtitle'
        />
      </div>
      <div className='post_inputs_container'>
        <div className='post_input_container'>
          <div className='post_input_title'>
            <h2>Post Title</h2>
          </div>
          <div className='post_input'>
            <Input placeholder='Post title' />
          </div>
        </div>
        <div className='post_input_container'>
          <div className='post_input_content'>
            <h2>Post Content</h2>
          </div>
          <div className='post_input'>
            <TextArea rows={4} placeholder='Post content' />
          </div>
        </div>
        <div className='post_input_button'>
          <Button type='primary' size='large'>
            Create Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
