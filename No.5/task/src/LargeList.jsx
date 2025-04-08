import React from 'react';

const LargeList = ({ items }) => {
  console.log('Rendering LargeList...');
  return (
    <div className="mt-4">
      <ul className="grid grid-cols-2 gap-2">
        {items.map((item, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded shadow-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.items) === JSON.stringify(nextProps.items);
};

export default React.memo(LargeList, areEqual);
