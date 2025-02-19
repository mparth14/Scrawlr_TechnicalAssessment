import React from 'react';
import UpvotesList from './components/UpvotesList';

function App() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>Upvotes Lists</h1>
      <UpvotesList />
      <UpvotesList />
    </div>
  );
}

export default App;