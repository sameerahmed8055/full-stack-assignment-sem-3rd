// ReusableComponent.js
import React from 'react';

const ReusableComponent = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ReusableComponent;

// App.js
import React from 'react';
import ReusableComponent from './components/ReusableComponent';

const App = () => {
  return (
    <div>
      <h1>Main App</h1>
      <ReusableComponent title="Section 1" content="Content for section 1" />
      <ReusableComponent title="Section 2" content="Content for section 2" />
    </div>
  );
};

export default App;
