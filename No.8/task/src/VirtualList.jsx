import React from 'react';
import { FixedSizeList as List } from 'react-window';

const itemCount = 10000;

const VirtualList = () => {
  const Row = ({ index, style }) => (
    <div style={style} className="px-4 py-2 border-b border-gray-200">
      Item #{index + 1}
    </div>
  );

  return (
    <div className="max-w-xl mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Virtual Scrolling List</h2>
      <List
        height={600}
        itemCount={itemCount}
        itemSize={35}
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualList;
