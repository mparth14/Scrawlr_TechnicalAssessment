import React, { useState } from 'react';
import Upvote from './Upvote';

const UpvotesList = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [upvotes, setUpvotes] = useState([{ id: 1 }]);

  const handleAddUpvote = () => {
    setUpvotes(prev => [...prev, { id: Date.now() }]);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '16px 0' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {upvotes.map(upvote => (
          <Upvote
            key={upvote.id}
            isSelected={isSelected}
            onClick={() => setIsSelected(!isSelected)}
          />
        ))}
      </div>
      <button
        onClick={handleAddUpvote}
        style={{
          backgroundColor: '#F4F6F8',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 16px',
          cursor: 'pointer',
          height: '40px'
        }}
      >
        +
      </button>
    </div>
  );
};

export default UpvotesList;