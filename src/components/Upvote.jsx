import React from 'react';

const Upvote = ({ isSelected, onClick }) => {
  const bgColor = isSelected ? '#E5E8FD' : '#F4F6F8';
  const arrowColor = isSelected ? '#253CF2' : '#343A40';

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        border: 'none',
        borderRadius: '4px',
        padding: '8px',
        cursor: 'pointer',
        margin: '4px'
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 4L3 15H21L12 4Z" fill={arrowColor} />
      </svg>
    </button>
  );
};

export default Upvote;
