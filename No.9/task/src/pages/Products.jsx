import React from 'react';
import { FixedSizeList as List } from 'react-window';

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const Row = ({ index, style }) => (
  <div style={style}>{items[index]}</div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
    <List height={500} itemCount={items.length} itemSize={35} width="100%">
      {Row}
    </List>
  </div>
);

export default Products;
