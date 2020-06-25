import React from 'react';
import Posts from './Posts';
import Post from './Post';
import { Router, Link } from '@reach/router';
import CreatePost from './CreatePost';
import { Menu } from 'antd';
import { ReadOutlined, FormOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const App = (props) => {
  return (
    <div className='app_container'>
      <div className='app_main_navigation'>
        <Menu mode='horizontal'>
          <Menu.Item key='mail' icon={<ReadOutlined />}>
            <Link to={`/posts`}>Posts</Link>
          </Menu.Item>
          <Menu.Item key='app' icon={<FormOutlined />}>
            <Link to={`/create_post`}>Create Post</Link>
          </Menu.Item>
        </Menu>
      </div>
      <Router>
        <Posts default path='posts' />
        <CreatePost path='create_post' />
        <Post path='post/:id' />
      </Router>
    </div>
  );
};

export default App;
