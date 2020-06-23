import React from 'react';
import Posts from './Posts';
import Post from './Post';
import { Router } from '@reach/router';
import CreatePost from './CreatePost';

const App = (props) => {
  return (
    <div className='app_container'>
      <Router>
        <CreatePost default />
        <Posts path='posts' />
        <Post path='post/:id' />
      </Router>
    </div>
  );
};

export default App;
