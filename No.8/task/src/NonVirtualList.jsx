// NonVirtualList.jsx
import React from 'react';

const NonVirtualList = () => {
  const items = Array.from({ length: 10000 }, (_, i) => i + 1);

  return (
    <div className="max-w-xl mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Non-Virtual List</h2>
      <div className="max-h-[600px] overflow-y-scroll">
        {items.map((item) => (
          <div key={item} className="px-4 py-2 border-b border-gray-200">
            Item #{item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonVirtualList;
