import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

const App = (props) => {
  return (
    <div>
      <h1> Hello REACT from inside</h1>
    </div>
  );
};

let rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
